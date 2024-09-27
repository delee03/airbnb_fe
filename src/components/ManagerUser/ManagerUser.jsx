import React, { useEffect, useState } from "react";
import { message, Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import nguoiDungSlice, { getValueUserApi } from "../../redux/nguoiDungSlice";
import ButtonCustom from "../Custom/ButtonCustom";
import { nguoiDungService } from "../../service/nguoiDung.service";
import { Button, Modal } from "antd";
import InputCustom from "../Custom/InputCustom";
import { useFormik } from "formik";
import * as yup from "yup";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const ManagerUser = () => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [typeButton, setTypeButton] = useState("add");
  const [userUpdate, setUserUpdate] = useState({});
  const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const dispatch = useDispatch();
  const { listNguoiDung } = useSelector((state) => state.nguoiDungSlice);
  // console.log(listNguoiDung);

  useEffect(() => {
    dispatch(getValueUserApi());
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      phone: "",
      gender: "",
      birthday: "",
      role: "ADMIN",
    },
    validationSchema: yup.object({
      name: yup.string().required("Không được bỏ trống họ tên"),
      email: yup
        .string()
        .email("Email không hợp lệ")
        .required("Không được bỏ trống email"),
      password: yup.string().required("Không được bỏ trống password"),
      phone: yup
        .string()
        .matches(
          /^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-4|6-9])\d{7}$/,
          "Vui lòng nhập đúng sdt Việt Nam"
        )
        .required("Vui lòng nhập đúng SDT Việt Nam"),
      gender: yup.boolean().required("Vui lòng chọn giới tính"),
      birthday: yup.string().required("Vui lòng chọn ngày sinh"),
    }),

    onSubmit: (values) => {
      console.log("Typebutton", typeButton);
      if (typeButton === "add") {
        nguoiDungService
          .createUser(values)
          .then((res) => {
            message.success({ content: "Thêm thành công" });
            dispatch(getValueUserApi());
            // setOpen(false); // Comment lại phần này để kiểm tra
          })
          .catch((err) => {
            message.error({ content: "Thêm thất bại" });
            console.log(err);
          });
      }

      if (typeButton === "update") {
        nguoiDungService
          .updateUser(userUpdate.id, values)
          .then((res) => {
            message.success({ content: "Sửa thành công" });
            dispatch(getValueUserApi());
            console.log(res);
            // setOpen(false); // Comment lại phần này để kiểm tra
          })
          .catch((err) => {
            message.error({ content: "Cập nhật thất bại" });
            console.log(err);
          });
      }
    },
  });

  const {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    setFieldValue,
  } = formik;

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
      title: "Ngày sinh",
      dataIndex: "birthday",
      key: "birthday",
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
          <button
            onClick={() => {
              setOpen(true);
              formik.setValues({
                name: record.name,
                email: record.email,
                phone: record.phone,
                gender: record.gender,
                birthday: record.birthday,
                role: record.role,
              });
              setUserUpdate(record);
            }}
            className="bg-yellow-500/85 text-white py-2 px-5"
          >
            Sửa
          </button>
          <button
            onClick={() => {
              nguoiDungService.deleteUser(record.id);
              message.success({ content: "Xóa thành công" });
              dispatch(getValueUserApi());
            }}
            className="bg-red-500/85 text-white py-2 px-5"
          >
            Xóa
          </button>
        </Space>
      ),
    },
  ];
  console.log(typeButton);
  console.log(userUpdate);
  console.log(values);
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          showLoading();
          setTypeButton("add");
        }}
      >
        Thêm quản trị
      </Button>

      {typeButton == "add" ? (
        <Modal
          title={
            <p
              className="text-center font-bold text-blue-600 text-xl uppercase
          "
            >
              {typeButton == "add" ? "Thêm quản trị" : "Sửa người dùng"}
            </p>
          }
          footer={""}
          loading={loading}
          open={open}
          onCancel={() => setOpen(false)}
        >
          <form onSubmit={handleSubmit}>
            <InputCustom
              label={"Họ và Tên"}
              name={"name"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
              value={values.name}
              placehoder={"Vui lòng nhập Họ và Tên"}
              typeInput=""
            />
            <InputCustom
              label={"Email"}
              name={"email"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
              value={values.email}
              placehoder={"Vui lòng nhập Email"}
              typeInput=""
            />
            <InputCustom
              label={"Mật Khẩu"}
              name={"password"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              value={values.password}
              placehoder={"Vui lòng nhập mật khẩu"}
              typeInput="password"
            />
            <InputCustom
              placehoder={"Vui lòng nhập sdt"}
              label={"Số điện thoại"}
              onBlur={handleBlur}
              touched={touched.phone}
              error={errors.phone}
              value={values.phone}
              onChange={handleChange}
              name={"phone"}
              id={"phone"}
            />
            <div className="flex justify-between gap-3">
              <div className="mb-2 w-3/6">
                <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                  Chọn giới tính
                </label>
                <select
                  name="gender"
                  onBlur={handleBlur}
                  id="gender"
                  onChange={handleChange}
                  value={values.gender}
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
                >
                  <option value="">Chọn giới tính</option>
                  <option value="true">Nam</option>
                  <option value="false">Nữ</option>
                </select>
                {touched.gender && errors.gender ? (
                  <p className="text-red-500 py-2">{errors.gender}</p>
                ) : null}
              </div>

              <div className="w-3/6">
                <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                  Chọn ngày sinh
                </label>
                <DatePicker
                  name="birthday"
                  format={"DD-MM-YYYY"}
                  defaultValue={dayjs("01-01-2015", "DD-MM-YYYY")}
                  value={
                    values.birthday
                      ? dayjs(values.birthday, "DD-MM-YYYY")
                      : null
                  }
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
                  onChange={(date, dateString) => {
                    console.log(dateString);
                    values.birthday = dateString || "";
                    setFieldValue("birthday", dateString || "");
                  }}
                />
                {touched.birthday && errors.birthday ? (
                  <p className="text-red-500 py-2">{errors.birthday}</p>
                ) : null}
              </div>
            </div>
            <InputCustom
              label={"ROLE"}
              name={"role"}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.role}
              touched={touched.role}
              value={values.role}
              pointer="pointer-events-none"
              placehoder={"Vui lòng nhập ROLE"}
              typeInput=""
            />
            <ButtonCustom
              content={"Tạo"}
              onSubmit={handleSubmit}
              type="submit"
              onClick={() => {
                setOpen(false);
              }}
            ></ButtonCustom>
            <div className="-mt-6">
              <ButtonCustom
                bgColor="bg-red-500"
                bgHover="hover:bg-red-600"
                content={"Đóng"}
                onSubmit={handleSubmit}
                type="submit"
                onClick={() => {
                  setOpen(false);
                }}
              ></ButtonCustom>
            </div>
          </form>
        </Modal>
      ) : (
        userUpdate && (
          <Modal
            title={
              <p
                className="text-center font-bold text-blue-600 text-xl uppercase
            "
              >
                {typeButton == "add" ? "Thêm quản trị" : "Sửa người dùng"}
              </p>
            }
            footer={""}
            loading={loading}
            open={open}
            onCancel={() => setOpen(false)}
          >
            <form onSubmit={handleSubmit}>
              <InputCustom
                label={"Họ và Tên"}
                name={"name"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
                value={values.name}
                placehoder={"Vui lòng nhập Họ và Tên"}
                typeInput=""
              />
              <InputCustom
                label={"Email"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                value={values.email}
                placehoder={"Vui lòng nhập Email"}
                typeInput=""
              />

              <InputCustom
                placehoder={"Vui lòng nhập sdt"}
                label={"Số điện thoại"}
                onBlur={handleBlur}
                touched={touched.phone}
                error={errors.phone}
                value={values.phone}
                onChange={handleChange}
                name={"phone"}
                id={"phone"}
              />
              <div className="flex justify-between gap-3">
                <div className="mb-2 w-3/6">
                  <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                    Chọn giới tính
                  </label>
                  <select
                    name="gender"
                    onBlur={handleBlur}
                    touched={touched.gender}
                    id="gender"
                    onChange={handleChange}
                    value={values.gender}
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
                  >
                    <option value="">Chọn giới tính</option>
                    <option value="true">Nam</option>
                    <option value="false">Nữ</option>
                  </select>
                  {touched.gender && errors.gender ? (
                    <p className="text-red-500 py-2">{errors.gender}</p>
                  ) : null}
                </div>

                <div className="w-3/6">
                  <label className="block mb-2 ml-1 text-sm font-medium text-gray-900">
                    Chọn ngày sinh
                  </label>
                  <DatePicker
                    name="birthday"
                    format={"DD-MM-YYYY"}
                    value={
                      values.birthday
                        ? dayjs(values.birthday, "DD-MM-YYYY")
                        : null
                    }
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full px-2.5 py-2"
                    onChange={(date, dateString) => {
                      setFieldValue("birthday", dateString || "");
                    }}
                  />
                  {touched.birthday && errors.birthday ? (
                    <p className="text-red-500 py-2">{errors.birthday}</p>
                  ) : null}
                </div>
              </div>
              <InputCustom
                label={"ROLE"}
                name={"role"}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.role}
                touched={touched.role}
                value={values.role}
                pointer="pointer-events-none"
                placehoder={"Vui lòng nhập ROLE"}
                typeInput=""
              />
              <ButtonCustom
                content={"Cập nhật"}
                onSubmit={handleSubmit}
                type="submit"
                onClick={() => {
                  if (!errors) setOpen(false); // Đóng Modal nếu không có lỗi
                }}
              ></ButtonCustom>
              <div className="-mt-6">
                <ButtonCustom
                  bgColor="bg-red-500"
                  bgHover="hover:bg-red-600"
                  content={"Hủy"}
                  onClick={() => {
                    setOpen(false);
                  }}
                ></ButtonCustom>
              </div>
            </form>
          </Modal>
        )
      )}

      <div>
        <Table columns={columns} dataSource={listNguoiDung}></Table>
      </div>
    </>
  );
};

export default ManagerUser;
