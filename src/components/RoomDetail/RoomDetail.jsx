import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRoomById } from "../../redux/roomDetailSlice";
import { DatePicker, Space } from "antd";
import "./RoomDetail.scss";
import {
    FavoriteRoom,
    FavoriteRoom1,
    MenuDots,
    Sharing,
} from "../../Icon/IconStorage";
import { comment } from "../../service/comment";

const RoomDetail = () => {
    const viTriRoom = useSelector((state) => state.viTriReducer.valueSearch);
    // console.log(viTriRoom);

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const [dataComment, setDataComment] = useState([]);
    const params = useParams();
    // console.log(params);
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.roomDetailReducer);
    console.log(room);
    useEffect(() => {
        //dispatch action lấy thông tin chi tiết phòng theo id
        dispatch(fetchRoomById(params.id));
        comment
            .getCommentByRoomId(params.id)
            .then((res) => {
                // console.log(res);
                setDataComment(res.data.content);
            })
            .catch((err) => {
                console.log("Đã có lỗi khi get comment", err);
            });
    }, [params.id, dispatch]);

    return (
        <section className="room-detail">
            <div className="container">
                <div>
                    <div className="flex justify-between items-center gap-1 -mt-10">
                        <h2 className="font-semibold text-3xl my-4">
                            {room.tenPhong}
                        </h2>
                        <div className="flex justify-between items-center ">
                            <div className="flex justify-between items-center gap-1 hover:bg-gray-200 hover:rounded-xl px-3 py-2">
                                <Sharing width="1.2em" height="1.2em" />
                                <span className="text-sm font-semibold underline ">
                                    Chia sẻ
                                </span>
                            </div>
                            <div className="flex justify-between items-center gap-1 hover:bg-gray-200 hover:rounded-xl px-3 py-2">
                                <FavoriteRoom1 width="1.2em" height="1.2em" />
                                <span className="text-sm font-semibold underline">
                                    Yêu thích
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className=" relative h-96">
                        <img
                            src={room.hinhAnh}
                            className="w-full h-full object-cover rounded-2xl"
                            alt={room.tenPhong}
                        />
                        <button className=" absolute right-4 bottom-5 hover:bg-black ease-in-out  delay-100 hover:text-white flex items-center gap-2 px-3 py-1 text-lg font-semibold rounded-lg border bg-white border-gray-800">
                            <MenuDots />
                            <span>Hiển thị tất cả ảnh</span>
                        </button>
                    </div>
                    <div className="flex mt-8 justify-between gap-4">
                        <div className="w-8/12 ">
                            <h2 className="font-semibold text-2xl ">
                                Phòng tọa lạc tại {viTriRoom}
                            </h2>
                            <div className="block w-full lg:w-2/4 xl:w-3/5 xl:flex justify-between items-center  -mt-2">
                                <h3 className="font-semibold text-base text-gray-600">
                                    {room.khach} khách
                                </h3>
                                <span className="mb-2 text-2xl font-bold text-gray-600 ">
                                    .
                                </span>
                                <p className="font-semibold text-base text-gray-600">
                                    {room.giuong} giường
                                </p>
                                <span className="mb-2 text-2xl font-bold text-gray-600 ">
                                    .
                                </span>
                                <p className="font-semibold text-base text-gray-600">
                                    {room.phongTam} phòng tắm đầy đủ
                                </p>
                                <span className="mb-2 text-2xl font-bold text-gray-600 ">
                                    .
                                </span>
                                <p className="font-semibold text-base text-gray-600">
                                    {room.phongNgu} phòng ngủ
                                </p>
                                <span className="mb-2 text-2xl font-bold text-gray-600 ">
                                    .
                                </span>
                                <p className="font-semibold text-base text-gray-600">
                                    {room.dieuHoa ? "Có" : "Không"} điều hòa
                                </p>
                            </div>
                            <div>
                                <h3>Mô tả</h3>
                                <p className="text-gray-600">{room.moTa}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-2xl my-6">
                                    Các tiện nghi trong phòng
                                </h3>
                                <div className="grid grid-cols-2 text-lg font-semibold">
                                    <div>
                                        <ul>
                                            <li>
                                                <span>Máy giặt</span>
                                            </li>
                                            <li>
                                                <span>Wifi</span>
                                            </li>
                                            <li>
                                                <span>Tivi</span>
                                            </li>
                                            <li>
                                                <span>Bàn ủi</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                            <li>
                                                <span>Hồ bơi</span>
                                            </li>
                                            <li>
                                                <span>Đỗ xe</span>
                                            </li>
                                            <li>
                                                <span>Bếp</span>
                                            </li>
                                            <li>
                                                <span>Điều hòa</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <h3 className="font-semibold text-2xl my-5 mt-10">
                                Bình luận <span>({dataComment.length})</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-10">
                                {dataComment.map((item, index) => (
                                    <div className="" key={index}>
                                        <div className="user flex justify-start items-center gap-6">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src={item.avatar}
                                                alt=""
                                            />
                                            <div>
                                                <h4 className="font-semibold">
                                                    {item.tenNguoiBinhLuan}
                                                </h4>
                                                <p>{item.ngayBinhLuan}</p>
                                            </div>
                                        </div>
                                        <div className="mt-5 font-semibold text-lg">
                                            <p>{item.noiDung}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-4/12">
                            <div className="shadow shadow-gray-900/20 box-booking">
                                <h2 className="text-xl font-semibold">
                                    {room.giaTien}
                                    <span className="text-base">/ đêm</span>
                                </h2>

                                <div>
                                    <div className="grid grid-cols-2 gap-2 mt-6">
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-black font-semibold"
                                            >
                                                Nhận phòng
                                            </label>
                                            <DatePicker
                                                onChange={onChange}
                                                overplayClassName="text-black placholder:text-gray-700"
                                                className="w-full rounded-xl text-black border placeholder:text-black border-gray-700 py-2"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor=""
                                                className="text-black font-semibold"
                                            >
                                                Trả phòng
                                            </label>
                                            <DatePicker
                                                onChange={onChange}
                                                className="w-full rounded-xl text-black border border-gray-700 py-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4 ">
                                        <label
                                            htmlFor=""
                                            className="text-black font-semibold"
                                        >
                                            Số khách
                                        </label>
                                        <select
                                            name=""
                                            className="w-full py-2 rounded-xl px-2 border border-gray-700"
                                            value="Chọn số lượng người"
                                            id=""
                                        >
                                            <option value="">1 người</option>
                                            <option value="">2 người</option>
                                            <option value="">3 người</option>
                                            <option value="">4 người</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <button className="w-full py-3 bg-main rounded-xl mt-5 text-white">
                                        Đặt phòng
                                    </button>
                                    <p className="text-gray-600">
                                        Bạn vẫn chưa bị trừ tiền
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomDetail;
