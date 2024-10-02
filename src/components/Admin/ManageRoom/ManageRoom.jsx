import React, { useState, useEffect } from "react";
import { Pagination, DatePicker, Select } from "antd";
import { roomPagination } from "../../../service/roomPagination.service";
import { convertCurrency } from "../../../common/convertCurrency";
import { Link } from "react-router-dom";
import { setdsViTri } from "../../../redux/viTriSlice";
import { Button, Modal } from "antd";
import { layViTri } from "../../../service/getLocationSearch";
import { useDispatch, useSelector } from "react-redux";
import { getRoomByLocationId } from "../../../service/getRoomByLocationId";

const ManageRoom = () => {
    const dispatch = useDispatch();

    const [pageIndex, setPageIndex] = useState(1); //trang hiện tại
    const pageSize = 9; //số phần tử trên trang
    const [total, setTotal] = useState(0); // Tổng số phần tử
    const [room, setRooms] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [updateOptions, setUpdateOptions] = useState([]);
    const [locationId, setLocationId] = useState("");
    const [roomImage, setRoomImage] = useState(null);

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 300);
    };
    useEffect(() => {
        layViTri()
            .then((res) => {
                const data = res.data.content;
                // console.log(data);
                dispatch(setdsViTri(data));
            })
            .catch((err) => {
                console.log("Lỗi khi gọi api lấy vị trí", err);
            });
    }, []);
    const dsViTri = useSelector((state) => state.viTriReducer.dsViTri);
    // console.log(dsViTri);

    //mảng vị trí trong dsViTri vậy cần map thành phần tử với thuộc tính value và key của Select

    const fetchRoomPagination = () => {
        if (!locationId) {
            roomPagination
                .getRoomPagination(pageIndex, pageSize)
                .then((res) => {
                    // console.log(res.data.content.data);
                    // console.log(total);
                    setRooms(res.data.content.data); // Giả sử API trả về phần `content` là danh sách phòng
                    setTotal(res.data.content.totalRow);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            getRoomByLocationId
                .getAllRoom(locationId)
                .then((res) => {
                    const data = res.data.content;
                    setRooms(data);

                    //console.log(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };
    useEffect(() => {
        fetchRoomPagination();
    }, [pageIndex, locationId]);
    const handlePageChange = (page) => {
        setPageIndex(page); // Chỉ cập nhật pageIndex
    };

    useEffect(() => {
        if (dsViTri && dsViTri.length > 0) {
            const options = [...dsViTri].map((item, index) => {
                return {
                    value: item.id,
                    label: (
                        <Link
                            onClick={() => {
                                console.log(item.id);

                                setLocationId(item.id);
                            }}
                            className="flex items-center justify-between gap-2 h-full px-2 py-4 rounded-lg w-full"
                        >
                            <img
                                src={item.hinhAnh}
                                alt=""
                                className="w-12 h-12 object-cover rounded-lg"
                            />
                            <h3>
                                {item.tenViTri} - {item.tinhThanh}
                            </h3>
                        </Link>
                    ),
                };
            });

            setUpdateOptions(options);
        }
    }, [dsViTri]);

    return (
        <section>
            <h2 className="text-center text-main  font-semibold text-3xl">
                Quản lí thông tin phòng
            </h2>
            <div className="flex py-5 justify-between items-center">
                <button
                    className="bg-main font-semibold mb-4 px-5 py-2 rounded-lg hover:bg-white border hover:border-red-500 hover:text-main text-white"
                    onClick={() => {
                        showLoading();
                    }}
                >
                    Thêm phòng
                </button>

                <div className="mr-10 py-8 min-w-80 min-h-10">
                    <Select
                        showSearch={false}
                        className="py-4 px-10 w-full h-full"
                        placeholder="Chọn phòng theo vị trí"
                        filterOption={(input, option) =>
                            (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        }
                        options={[
                            ...updateOptions,
                            {
                                value: 0,
                                label: (
                                    <Link
                                        onClick={() => {
                                            setLocationId(null);
                                        }}
                                        className="flex items-center justify-between gap-2 h-full px-2 py-4 rounded-lg w-full"
                                    >
                                        <img
                                            src="https://via.placeholder.com/300"
                                            alt="placeholder"
                                            className="w-12 h-12 object-cover rounded-lg"
                                        />

                                        <h3>Tất cả địa điểm</h3>
                                    </Link>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
            <Modal
                title={
                    <p
                        className="text-center font-bold text-blue-600 text-xl uppercase
          "
                    >
                        Thêm phòng
                    </p>
                }
                footer={null}
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
            ></Modal>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-x-4 gap-y-14  ">
                {room.length > 0 &&
                    room.map((item, index) => {
                        return (
                            <Link to={`room-detail/${item.id}`}>
                                <div
                                    key={index}
                                    className="max-h-64 mb-24 w-full"
                                >
                                    <div className=" w-full  h-64">
                                        <img
                                            className="w-11/12 h-full object-cover rounded-2xl"
                                            src={item.hinhAnh}
                                            alt=""
                                        />
                                    </div>

                                    <h3 className="font-semibold mt-3 min-h-12">
                                        {item.tenPhong}
                                    </h3>
                                    <div className="flex justify-between my-2">
                                        <span className="text-gray-600">
                                            Số khách: {item.khach}
                                        </span>
                                        <h5 className=" text-gray-600 ">
                                            Giường đôi: {item.giuong}
                                        </h5>
                                    </div>

                                    <h4 className="font-semibold">
                                        {convertCurrency(item.giaTien)}
                                        /đêm
                                    </h4>
                                </div>
                            </Link>
                        );
                    })}
            </div>
            <Pagination
                className="py-10 mx-0 flex justify-center mt-8"
                current={pageIndex}
                pageSize={pageSize}
                total={total}
                onChange={handlePageChange}
                showSizeChanger={false}
            />
            ;
        </section>
    );
};
export default ManageRoom;
