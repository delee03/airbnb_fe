import React from "react";
import { SearchIcon } from "../../Icon/IconStorage";
const BarSearch = ({ show }) => {
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
                            className="w-full focus-visible:outline-none text-sm placeholder:text-gray-600"
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
