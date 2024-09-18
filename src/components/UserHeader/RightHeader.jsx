import React from "react";
import {
    BarMenu,
    GlobalIcon,
    SearchIcon,
    UserIcon,
} from "../../Icon/IconStorage";

const RightHeader = () => {
    return (
        <>
            <div className="flex justify-between gap-3 items-center mt-2 box-user">
                <h3 className="text-sm font-semibold text-gray-900">
                    Cho thuê chỗ ở qua AirBnb
                </h3>
                <div className="global">
                    <GlobalIcon width="1em" height="1em" />
                </div>
                <div className="">
                    <div className="bar-menu">
                        <BarMenu width="1em" height="1em" />
                        <UserIcon width="1.6em" height="1.6em" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightHeader;
