import React, { useEffect } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getValueUserApi } from "../../redux/nguoiDungSlice";

const ManagerUser = () => {
  const dispatch = useDispatch();
  const { listNguoiDung } = useSelector((state) => state.nguoiDungSlice);
  console.log(listNguoiDung);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <Tag color={text == "USER" ? "cyan-inverse" : "red-inverse"}>
          {text}
        </Tag>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="space-x-3">
          <button className="bg-red-500/85 text-white py-2 px-5">Xóa</button>
          <button className="bg-yellow-500/85 text-white py-2 px-5">Sửa</button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={listNguoiDung}></Table>
    </div>
  );
};

export default ManagerUser;
