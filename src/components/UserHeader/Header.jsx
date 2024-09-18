import React, { useEffect, useState } from "react";
import { SearchIcon, LogoMain } from "../../Icon/IconStorage";
import "./Header.scss";
import RightHeader from "./RightHeader";

const Header = () => {
    // State để kiểm tra xem có cần hiển thị thanh search không
    const [showSearchBar, setShowSearchBar] = useState(false);

    // Hàm lắng nghe sự kiện scroll
    const handleScroll = () => {
        //đơn vị px
        if (window.scrollY > 100) {
            setShowSearchBar(true);
        } else {
            setShowSearchBar(false);
        }
    };

    // Sử dụng useEffect để gắn sự kiện scroll khi component mount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            // Dọn dẹp sự kiện khi component bị unmount
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header className="main-header ">
                <div className="flex justify-between ml-4 mr-4">
                    <div className="mt-3 text-red-500">
                        <LogoMain />
                    </div>

                    <RightHeader />
                </div>

                {!showSearchBar && (
                    <div style={{ marginTop: "-39px" }}>
                        <h2 className="mb-5 mt-1">
                            <span className="text-black font-semibold text-base mr-2 ">
                                Chỗ ở
                            </span>{" "}
                            <span className="text-gray-600 text-base ml-2">
                                Trải nghiệm
                            </span>
                        </h2>
                        <div className="box-search w-3/5 mx-auto ">
                            <div
                                className="flex items-center justify-evenly"
                                style={{ marginLeft: "-10px" }}
                            >
                                <div className="w-4/12 pl-4 search-item">
                                    <label htmlFor="" className="search-title">
                                        Địa điểm
                                    </label>
                                    <input
                                        className="w-full  focus-visible:outline-none placeholder:text-gray-500"
                                        type="text"
                                        placeholder="Tìm kiếm điểm đến"
                                    />
                                </div>
                                <div className="w-2/12 search-item border-l-2 border-gray-200 px-4">
                                    <label htmlFor="" className="search-title">
                                        Nhận phòng
                                    </label>
                                    <input
                                        className="max-w-ful focus-visible:outline-none placeholder:text-gray-500"
                                        type="text"
                                        placeholder="Thêm ngày"
                                        readOnly={true}
                                    />
                                </div>
                                <div className="w-2/12 search-item border-l-2 border-gray-200 px-4">
                                    <label htmlFor="" className="search-title">
                                        Trả phòng
                                    </label>
                                    <input
                                        type="text"
                                        className="max-w-full focus-visible:outline-none placeholder:text-gray-500"
                                        placeholder="Thêm ngày"
                                        readOnly={true}
                                    />
                                </div>
                                <div className="w-4/12 search-item pl-4 flex items-center justify-between border-l-2 border-gray-200">
                                    <div className="w-10/12 ">
                                        <label
                                            htmlFor=""
                                            className="search-title"
                                        >
                                            Khách
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full focus-visible:outline-none placeholder:text-gray-500"
                                            placeholder="Thêm ngày"
                                            readOnly={true}
                                        />
                                    </div>
                                    <div className="w-2/12">
                                        <button
                                            type="button"
                                            className=" px-3 py-3 bg-red-500  font-bold text-white rounded-full"
                                        >
                                            <SearchIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Thanh search sẽ được hiển thị khi state showSearchBar = true */}
                {showSearchBar && (
                    <div
                        className={`search-bar ${
                            showSearchBar ? "visible" : ""
                        } flex flex-col justify-center`}
                    >
                        <div className="flex justify-between items-center gap-2 px-3">
                            <div className="w-10/12 ">
                                <input
                                    type="text"
                                    className="w-full focus-visible:outline-none text-sm placeholder:text-gray-600"
                                    placeholder="Địa điểm bất kì..."
                                />
                            </div>
                            <div className="w-2/12 -mr-5">
                                <button
                                    type="button"
                                    className=" px-2 py-2 bg-red-500  font-bold text-white rounded-full"
                                >
                                    <SearchIcon width="1.2em" height="1.2em" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>
            <div className="content">
                {/* <h1>
                    Scroll down to see the search bar Yehh Hello how are you
                    doing!
                </h1> */}
                <p style={{ height: "150vh" }}>Some content here...</p>
            </div>
        </>
    );
};

export default Header;
