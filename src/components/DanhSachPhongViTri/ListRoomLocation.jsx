import React from "react";
import { useSearchParams } from "react-router-dom";
import { Reputation } from "../../Icon/IconStorage";

const arrSymbol = [
    {
        hinhAnh: "./img/img1.png",
        title: "Ở trong ngôi nhà Purple Rain của Prince",
        owner: "Chủ nhà/Người tổ chức: Wendy và Lisa",
        availability: "Nhận đặt phòng từ tháng 9",
    },
    {
        hinhAnh: "/img/img2.png",
        title: "Thư giãn tại phòng khách cùng Doja",
        owner: "Chủ nhà/Người tổ chức: Doja Cat",
        availability: "Ra mắt vào tháng 10",
    },

    {
        hinhAnh: "/img/img3.png",
        title: "Tiệc ngủ ở Nhà búp bê Polly Pocket",
        owner: " Chủ nhà: Polly Pocket",
        availability: "Đã hết phòng",
    },
    {
        hinhAnh: "/img/img4.png",
        title: "Buổi hẹn chơi chung tại Nhà búp bê Polly Pocket",
        owner: "Chủ nhà/Người tổ chức: Polly Pocket",
        availability: "Đã hết phòng",
    },
    {
        hinhAnh: "/img/img7.jpeg",
        title: "Thăng hạng VIP cùng Kevin Hart",
        owner: "Chủ nhà/Người tổ chức: Kevin Hart",
        availability: "Đã hết phòng",
    },
    {
        hinhAnh: "/img/img8.jpeg",
        title: "Huấn luyện tại dinh thự X-Mansion",
        owner: "Chủ nhà/Người tổ chức: Jubilee",
        availability: "Đã hết phòng",
    },
];
const ListRoomLocation = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    let idLocation = searchParam.get("idLocation");
    //console.log(searchParam.get("idLocation"));
    //cần có 1 useEffect để gọi api lấy danh sách phòng theo vị trí từ idLocation
    return (
        <section>
            {/* <h1>Đây là trang danh sách phòng theo vị trí</h1>
            <h2>Id của vị trí: {idLocation}</h2> */}
            <div
                className="max-w-full lg:max-w-6xl"
                style={{ maxWidth: "1470px", margin: "0 auto" }}
            >
                <div className="block  xl:flex justify-between items-start gap-7">
                    <div className="w-full  xl:w-7/12">
                        <div className="flex items-center justify-start gap-3">
                            <h2 className="font-semibold text-3xl text-left ">
                                Các chỗ ở tại khu vực bạn đã chọn
                            </h2>
                            <Reputation width="1.8em" height="1.8em" />
                        </div>
                        <span className="text-base text-gray-600 block my-5">
                            Hơn 1.000 chỗ ở
                        </span>
                        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-x-4 gap-y-14  ">
                            {arrSymbol.map((item, index) => (
                                <div key={index} className="min-h-64 mb-16">
                                    <img
                                        className="w-full h-full object-cover rounded-2xl"
                                        src={item.hinhAnh}
                                        alt=""
                                    />
                                    <h3 className="font-semibold mt-3">
                                        {item.title}
                                    </h3>
                                    <h4>{item.owner}</h4>
                                    <h5 className="font-semibold ">
                                        {item.availability}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="map w-full xl:w-5/12 h-screen">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22048138.81715737!2d1.0141049065281622!3d47.57901010729313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2zQ2jDonUgw4J1!5e0!3m2!1svi!2s!4v1726925750926!5m2!1svi!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListRoomLocation;
