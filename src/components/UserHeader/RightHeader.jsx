import React, { useState } from "react";
import {
    BarMenu,
    GlobalIcon,
    SearchIcon,
    UserIcon,
} from "../../Icon/IconStorage";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { path } from "../../common/path";

const RightHeader = () => {
    const items = [
        {
            key: "1",
            label: (
                <Link
                    to={path.signin}
                    className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300"
                >
                    Sign in
                </Link>
            ),
        },
        {
            key: "2",
            label: (
                <Link
                    to={path.signup}
                    className="py-2 px-4 rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white duration-300"
                >
                    Sign up
                </Link>
            ),
        },
    ];
    const [open, setOpen] = useState(false);
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
                    <div>
                        <Dropdown
                            onClick={() => setOpen(!open)}
                            menu={{
                                items,
                            }}
                        >
                            <div className="bar-menu">
                                <BarMenu width="1em" height="1em" />
                                <UserIcon width="1.6em" height="1.6em" />
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* <Link
                    to={path.signin}
                    className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300"
                >
                    Sign in
                </Link>
                <Link
                    to={path.signup}
                    className="py-2 px-4 rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white duration-300"
                >
                    Sign up
                </Link> */}
        </>
    );
};

export default RightHeader;
