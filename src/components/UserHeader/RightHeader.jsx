import React, { useState } from "react";
import {
  BarMenu,
  GlobalIcon,
  SearchIcon,
  UserIcon,
} from "../../Icon/IconStorage";
import { Dropdown } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { getLocalStorage } from "../../utils/localStorage";

const RightHeader = () => {
  const { user } = getLocalStorage("user");
  console.log(user);

  const navigate = useNavigate();

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
  const itemsLoggedIn = [
    {
      key: "1",
      label: (
        <Link
          to="/profile"
          className="py-3 px-4 rounded-md my-3 hover:bg-gray-200 duration-300"
        >
          Xem thông tin cá nhân
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to="/"
          className="py-3 px-4 my-3 rounded-md hover:bg-gray-200 duration-300"
        >
          Phòng yêu thích của bạn
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <div className="mx-auto">
          <Link
            to={"/"}
            className="w-full py-3 px-10  my-3 rounded-md text-main hover:bg-main hover:text-white duration-300"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/sign-in");
              window.location.reload();
            }}
          >
            Đăng xuất
          </Link>
        </div>
      ),
    },
  ];

  console.log(user);
  const [open, setOpen] = useState(false);
  //hàm xử lí check localStorage

  const handleLoggedIn = () => {
    const infoUserLogin = getLocalStorage("user");
    if (infoUserLogin) {
      return itemsLoggedIn;
    }
    return items;
  };

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
                items: handleLoggedIn(),
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
