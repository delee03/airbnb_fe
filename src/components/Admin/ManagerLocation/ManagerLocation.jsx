import { Table } from "antd";
import React from "react";

const ManagerLocation = () => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
      key: "tenViTri",
    },

    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      key: "tinhThanh",
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
      key: "quocGia",
    },

    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
    },
  ];

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submission attempted");
          formik.validateForm().then((errors) => {
            //check validation before submit
            if (Object.keys(errors).length === 0) {
              handleSubmit();
            } else {
              console.log("Validation Errors:", errors); // Log validation errors to debug
            }
          });
        }}
      >
        <div className="-mt-6"></div>
      </form>

      <div>
        <Table columns={columns}></Table>
      </div>
    </>
  );
};

export default ManagerLocation;
