import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { authService } from "../../service/auth.service";
import { useDispatch, useSelector } from "react-redux";
import {
    updateFromApiReservation,
    updateRoomReservation,
} from "../../redux/reservationSlice";
import { getRoomByLocationId } from "../../service/getRoomByLocationId";
import { convertCurrency } from "../../common/convertCurrency";
import SpinnerCustom from "../Custom/SpinnerCustom";
import UserInfo from "./UserInfo";

const UserProfile = () => {
    const user = getLocalStorage("user");
    const dispatch = useDispatch();
    //sau khi xem qua tôi cần check xem local lấy từ lúc người dùng đăng nhập hay là đăng kí
    // const [roomReservation, setRoomReservation] = useState([]);
    //console.log(user);
    const [infoUser, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);
    //get User by id id lấy từ localeStorage
    useEffect(() => {
        authService
            .getInfoUser(user?.user.id)
            .then((res) => setUserInfo(res.data.content))
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const { arrReservation } = useSelector((state) => state.reservationReducer);
    const { arrRoomById } = useSelector((state) => state.reservationReducer);
    console.log(arrRoomById);
    //get Reservation by id of that user and update to redux
    console.log(arrReservation);
    useEffect(() => {
        if (infoUser.id && arrReservation.length === 0) {
            authService
                .getReservations(infoUser?.id)
                .then((res) => {
                    console.log(res);
                    dispatch(updateFromApiReservation(res.data.content));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [infoUser.id, arrReservation.length, dispatch]);
    //get Room by id of that reservation and update to redux
    //đảm bảo là arrReservation đã có dữ liệu và arrRoomById chưa có dữ liệu mới chạy tránh gọi lại nhiều lần khi chuyển đổi url
    //redundant api calls and dispatches
    useEffect(() => {
        if (arrReservation.length > 0 && arrRoomById.length === 0) {
            const fetchRooms = async () => {
                for (let i = 0; i < arrReservation.length; i++) {
                    const roomId = arrReservation[i].maPhong;
                    try {
                        const res = await getRoomByLocationId.getRoomById(
                            roomId
                        );
                        dispatch(updateRoomReservation(res.data.content));
                    } catch (err) {
                        console.log(err);
                    }
                }
            };
            fetchRooms();
            setLoading(false);
        }
    }, [arrReservation, arrRoomById.length]);

    return (
        <>
            {loading && <SpinnerCustom />}
            <div className="flex gap-8 p-8">
                {/* Phần thông tin người dùng */}
                <div className="w-1/3 bg-white shadow-lg p-6 rounded-md">
                    <UserInfo info={infoUser} />
                </div>

                {/* Phần chào mừng và phòng đã thuê */}
                <div className="w-2/3">
                    <div className="bg-white shadow-lg p-6 rounded-md mb-6">
                        <h2 className="text-xl font-bold">
                            Xin chào <span>{infoUser.name}</span>
                        </h2>
                        <p>Bắt đầu tham gia vào 2021</p>
                        <button className="text-blue-500 mt-2">
                            Chỉnh sửa hồ sơ
                        </button>
                    </div>
                    {arrRoomById.length === 0 ? (
                        <h3 className="font-semibold my-3 text-2xl text-main">
                            Không có phòng nào đã đặt
                        </h3>
                    ) : (
                        <h3 className="font-semibold my-3 text-2xl text-main">
                            Lịch sử phòng của {infoUser.name} đã đặt tại Airbnb
                            nè
                        </h3>
                    )}

                    {/* Danh sách phòng đã thuê */}
                    <div className="grid grid-cols-1 gap-4">
                        {arrRoomById?.map((item, index) => {
                            //map 2 mảng để lấy ra thông tin phòng đã đặt là 1 object
                            const matchingReservation = arrReservation.find(
                                (reserve) => reserve.maPhong === item.id
                            );
                            console.log(matchingReservation);
                            return (
                                <div
                                    className="bg-white shadow-md rounded-md overflow-hidden  pb-8"
                                    key={index}
                                >
                                    <img
                                        src={item.hinhAnh}
                                        alt="Phòng 1"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="px-4 py-2 mt-2 flex justify-between items-start">
                                        <div className="w-10/12">
                                            <h3 className="font-semibold text-lg">
                                                {item.tenPhong}
                                            </h3>
                                        </div>
                                        <p className="text-right font-semibold ">
                                            <span>
                                                {convertCurrency(
                                                    item.giaTien,
                                                    "VND"
                                                )}
                                            </span>
                                            / đêm
                                        </p>
                                    </div>
                                    <div className="ml-3 mb-2 flex gap-x-2 justify-start">
                                        <p>
                                            <span>{item.khach}</span> khách ·
                                            Phòng studio ·{" "}
                                            <span>{item.giuong}</span> giường ·
                                            <span>{item.phongTam}</span> phòng
                                            tắm
                                        </p>
                                        <p>
                                            {item.hoBoi
                                                ? "Đặt biệt: Hồ bơi"
                                                : ""}{" "}
                                            -{item.wifi ? "Wifi" : ""}
                                            {item.dieuHoa ? "Điều hòa" : ""} -
                                            {item.mayGiat ? "Máy giặt" : ""} -
                                            {item.doXe ? "Chỗ đậu xe" : ""}
                                        </p>
                                    </div>
                                    <div>
                                        {/* Add reservation information if found */}
                                        {matchingReservation && (
                                            <div className="ml-3 flex gap-x-3 flex-start">
                                                <p className="font-semibold">
                                                    Ngày đến:{" "}
                                                    {/* {matchingReservation.ngayDen} */}
                                                    {new Date(
                                                        matchingReservation.ngayDen
                                                    ).toLocaleDateString(
                                                        "vi-VN"
                                                    )}
                                                </p>
                                                <p className="font-semibold">
                                                    Ngày đi:{" "}
                                                    {/* {matchingReservation.ngayDi} */}
                                                    {new Date(
                                                        matchingReservation.ngayDi
                                                    ).toLocaleDateString(
                                                        "vi-VN"
                                                    )}
                                                </p>
                                                <p className="font-semibold">
                                                    Số lượng khách:{" "}
                                                    {
                                                        matchingReservation.soLuongKhach
                                                    }
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
