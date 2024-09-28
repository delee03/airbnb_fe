import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserInfo = ({ info }) => {
    const userInfo = useSelector((state) => state.authSlice.infoUser);
    const [avatar, setAvatar] = useState(null);
    const handleUploadAvatar = (event) => {
        event.preventDefault();
        // Chuyển đổi dữ liệu vào formData
        let formData = new FormData();
        formData.append("formFile", avatar.file);
        let { token } = infoUser;
        console.log(token);
        nguoiDungService
            .uploadAvatar(token, formData)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center ">
                {/* Avatar */}
                <form onSubmit="">
                    <div className="w-24 h-24  rounded-full bg-gray-300  flex items-center justify-center">
                        <span className="text-gray-600">Cập nhật ảnh</span>
                    </div>
                    <input
                        onChange={(e) => {
                            console.log(e.target.files[0]);
                            if (e.target.files[0]) {
                                setAvatar({
                                    file: e.target.files[0],
                                    preview: URL.createObjectURL(
                                        e.target.files[0]
                                    ),
                                });
                            }
                        }}
                        type="file"
                        placeholder="Vui lòng cập nhật ảnh"
                        className="ml-4  mt-5 "
                        accept="image/png, image/jpeg, image/jpg"
                    />
                </form>
                {/* Xác minh danh tính */}
            </div>
            {/* Thông tin xác nhận */}
            <div className="mt-10">
                <h3 className="font-bold">
                    <span>{info?.name}</span> đã xác nhận
                </h3>
                <ul className="list-disc pl-4">
                    <li>Địa chỉ email</li>
                </ul>
                <button className="mt-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">
                    Nhận huy hiệu
                </button>
            </div>
        </>
    );
};

export default UserInfo;
