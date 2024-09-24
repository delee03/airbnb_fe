import React, { useEffect, useState } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import { authService } from "../../service/auth.service";
import { useDispatch, useSelector } from "react-redux";
import {
  updateFromApiReservation,
  updateRoomReservation,
} from "../../redux/reservationSlice";
import { getRoomByLocationId } from "../../service/getRoomByLocationId";

const UserInformation = () => {
  const { user } = getLocalStorage("user");
  const dispatch = useDispatch();
  // const [roomReservation, setRoomReservation] = useState([]);
  //console.log(user);
  const [infoUser, setUserInfo] = useState({});
  useEffect(() => {
    authService
      .getInfoUser(user.id)
      .then((res) => setUserInfo(res.data.content))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const { arrReservation } = useSelector((state) => state.reservationReducer);
  const { arrRoomById } = useSelector((state) => state.reservationReducer);
  console.log(arrRoomById);
  //
  console.log(arrReservation);
  useEffect(() => {
    authService
      .getReservations(infoUser?.id)
      .then((res) => {
        console.log(res);
        dispatch(updateFromApiReservation(res.data.content));
      })
      .catch((err) => {});
  }, [infoUser]);
  useEffect(() => {
    if (arrReservation.length > 0) {
      for (let i = 0; i < arrReservation.length; i++) {
        console.log(arrReservation[i].maPhong);
        getRoomByLocationId
          .getRoomById(arrReservation[i].maPhong)
          .then((res) => {
            console.log(res);
            // setRoomReservation([...roomReservation, res.data.content]);
            dispatch(updateRoomReservation(res.data.content));
          })
          .catch((err) => {
            console.log(err);
          });
      }
      // console.log(roomReservation);
    }
  }, [arrReservation]);

  // console.log(roomReservation);
  return (
    <div className="flex gap-8 p-8">
      {/* Phần thông tin người dùng */}
      <div className="w-1/3 bg-white shadow-lg p-6 rounded-md">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
            <span className="text-gray-600">Cập nhật ảnh</span>
          </div>
          {/* Xác minh danh tính */}
          <button className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
            Nhận huy hiệu
          </button>
        </div>
        {/* Thông tin xác nhận */}
        <div className="mt-6">
          <h3 className="font-bold">
            <span>{infoUser.name}</span> đã xác nhận
          </h3>
          <ul className="list-disc pl-4">
            <li>Địa chỉ email</li>
          </ul>
        </div>
      </div>

      {/* Phần chào mừng và phòng đã thuê */}
      <div className="w-2/3">
        <div className="bg-white shadow-lg p-6 rounded-md mb-6">
          <h2 className="text-xl font-bold">
            Xin chào <span>{infoUser.name}</span>
          </h2>
          <p>Bắt đầu tham gia vào 2021</p>
          <button className="text-blue-500 mt-2">Chỉnh sửa hồ sơ</button>
        </div>
        {/* Danh sách phòng đã thuê */}
        <div className="grid grid-cols-1 gap-4">
          {arrRoomById?.map((item, index) => (
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={item.hinhAnh}
                alt="Phòng 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{item.tenPhong}</h3>
                <p>
                  <span>{item.khach}</span> khách · Phòng studio · 1 giường · 1
                  phòng tắm
                </p>
                <p>Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt</p>
                <p className="text-right">
                  <span>{item.giaTien}</span>/ tháng
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
