import React, { useState } from "react";
import { SearchIcon } from "../../Icon/IconStorage";
import { useSelector } from "react-redux";
const BarSearch = ({ show }) => {
    const valueSearch = useSelector((state) => state.viTriReducer.valueSearch);
    const [focus, setFocus] = useState(false);
    const [search, setValueSearch] = useState("");
    // console.log(valueSearch);
    return (
        <>
            <div
                className={`search-bar ${
                    show ? "visible" : ""
                } flex flex-col justify-center`}
            >
                <div className="flex justify-between items-center gap-2 px-3">
                    <div className="w-10/12 ">
                        <input
                            type="text"
                            onChange={(e) => {
                                setFocus(true);
                                // console.log(e);
                                setValueSearch(e.target.value);
                            }}
                            value={!focus ? valueSearch : search}
                            className="w-full text-gray-700 font-semibold focus-visible:outline-none text-sm placeholder:text-gray-600"
                            placeholder="Địa điểm bất kì..."
                        />
                    </div>
                    <div className="w-2/12 -mr-7">
                        <button
                            type="button"
                            className=" px-2 py-2 bg-red-500  font-bold text-white rounded-full"
                        >
                            <SearchIcon width="1.2em" height="1.2em" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarSearch;
