import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed} className="">
        <div className="demo-logo-vertical" />
        <Menu
          className=""
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <i className="fa-regular fa-user"></i>,
              label: <Link to={""}>Quản lý người dùng</Link>,
            },
            {
              key: "2",
              icon: <i className="fa-solid fa-briefcase"></i>,
              label: <Link to={""}> Quản lý thông tin phòng</Link>,
            },
            {
              key: "3",
              icon: <i className="fa-regular fa-handshake"></i>,
              label: <Link to={""}>Quản lý đặt phòng</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminTemplate;
