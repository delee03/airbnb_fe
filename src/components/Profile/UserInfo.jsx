import React from "react";

const UserInfo = ({ info }) => {
    return (
        <>
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
                    <span>{info.name}</span> đã xác nhận
                </h3>
                <ul className="list-disc pl-4">
                    <li>Địa chỉ email</li>
                </ul>
            </div>
        </>
    );
};

export default UserInfo;
