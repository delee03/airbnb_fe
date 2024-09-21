import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRoomById } from "../../redux/roomDetailSlice";

const RoomDetail = () => {
    const params = useParams();
    // console.log(params);
    const dispatch = useDispatch();
    const { room } = useSelector((state) => state.roomDetailReducer);
    console.log(room);
    useEffect(() => {
        //dispatch action lấy thông tin chi tiết phòng theo id
        dispatch(fetchRoomById(params.id));
    }, [params.id, dispatch]);

    return (
        <section>
            <div className="container">
                <div>
                    <h2 className="font-semibold text-3xl my-4">
                        {room.tenPhong}
                    </h2>
                    <div className="">
                        <img
                            src={room.hinhAnh}
                            className="w-full h-96 object-cover rounded-2xl"
                            alt={room.tenPhong}
                        />
                    </div>
                    <div className="flex mt-6 justify-between gap-4">
                        <div className="w-9/12">
                            <h1>{room.khach}</h1>
                            <p>{room.giuong}</p>
                            <p>{room.giaTien}</p>
                        </div>
                        <div className="w-3/12">
                            <div className="shadow shadow-gray-900/20">
                                <h2>Nhận phòng: 12/12/2024</h2>
                                <h2>Trả phòng: 22/12/2024</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomDetail;
