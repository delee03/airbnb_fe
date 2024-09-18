import React from "react";

import { SearchIcon } from "../../Icon/IconStorage";

const BoxSearch = () => {
    return (
        <>
            <div style={{ marginTop: "-39px" }}>
                <h2 className="mb-5 mt-1">
                    <span className="text-black font-bold text-lg mr-2 ">
                        Chỗ ở
                    </span>{" "}
                    <span className="text-gray-600 text-lg ml-2">
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
                                className="w-full  focus-visible:outline-none placeholder:text-gray-500 placeholder:text-base"
                                type="text"
                                placeholder="Tìm kiếm điểm đến"
                            />
                        </div>
                        <div className="w-2/12 search-item border-l-2 border-gray-200 px-4">
                            <label htmlFor="" className="search-title">
                                Nhận phòng
                            </label>
                            <input
                                className="max-w-ful focus-visible:outline-none placeholder:text-gray-500 placeholder:text-base"
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
                                className="max-w-full focus-visible:outline-none placeholder:text-gray-500 placeholder:text-base"
                                placeholder="Thêm ngày"
                                readOnly={true}
                            />
                        </div>
                        <div className="w-4/12 search-item pl-4 flex items-center justify-between border-l-2 border-gray-200">
                            <div className="w-10/12 ">
                                <label htmlFor="" className="search-title">
                                    Khách
                                </label>
                                <input
                                    type="text"
                                    className="w-full focus-visible:outline-none placeholder:text-gray-500 placeholder:text-base"
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
        </>
    );
};

export default BoxSearch;
