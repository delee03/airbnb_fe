import React from "react";

const UserInformation = () => {
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
                    <h3 className="font-bold">Du đã xác nhận</h3>
                    <ul className="list-disc pl-4">
                        <li>Địa chỉ email</li>
                    </ul>
                </div>
            </div>

            {/* Phần chào mừng và phòng đã thuê */}
            <div className="w-2/3">
                <div className="bg-white shadow-lg p-6 rounded-md mb-6">
                    <h2 className="text-xl font-bold">Xin chào, tôi là Du</h2>
                    <p>Bắt đầu tham gia vào 2021</p>
                    <button className="text-blue-500 mt-2">
                        Chỉnh sửa hồ sơ
                    </button>
                </div>
                {/* Danh sách phòng đã thuê */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white shadow-md rounded-md overflow-hidden">
                        <img
                            src="https://a0.muscache.com/im/pictures/miso/Hosting-21677902/original/e6d4345e-cd1a-4481-9f89-4457d1c14b15.jpeg?im_w=1200"
                            alt="Phòng 1"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold">
                                Romantic APT for Long-term Living
                            </h3>
                            <p>
                                2 khách · Phòng studio · 1 giường · 1 phòng tắm
                            </p>
                            <p>Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt</p>
                            <p className="text-right">$385 / tháng</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-md rounded-md overflow-hidden">
                        <img
                            src=""
                            alt="Phòng 2"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold">
                                Landmark81's View_Full Natural Light
                            </h3>
                            <p>
                                2 khách · Phòng studio · 1 giường · 1 phòng tắm
                            </p>
                            <p>Wifi - Bếp - Điều hòa nhiệt độ - Máy giặt</p>
                            <p className="text-right">$396 / tháng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInformation;
