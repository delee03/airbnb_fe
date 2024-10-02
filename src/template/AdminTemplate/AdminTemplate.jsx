import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import HeaderAdmin from "./HeaderAdmin";
import { Link, Outlet } from "react-router-dom";
import styles from "./Admin.module.scss";
import { Airbnb, AirbnbSmall } from "../../Icon/IconStorage";
const { Header, Sider, Content } = Layout;
const AdminTemplate = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const hanldeClick = (e) => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className="min-h-screen layout-admin">
            <Sider
                className={styles.customedSider}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Link to={"/"} className="block demo-logo-vertical py-5 ml-5">
                    {/* <img
                        src="logo.svg"
                        alt="logo"
                        className="w-40 object-contain h-10 rounded-full"
                    /> */}
                    {!collapsed ? (
                        <Airbnb width="12rem" height="3.5em" />
                    ) : (
                        <AirbnbSmall width="5.5em" height="3.5em" />
                    )}
                </Link>
                <div className={styles.menuWrapper}>
                    <Menu
                        className={styles.customedMenu}
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
                                label: (
                                    <Link to={""}>
                                        {" "}
                                        Quản lý thông tin phòng
                                    </Link>
                                ),
                            },
                            {
                                key: "3",
                                icon: (
                                    <i className="fa-regular fa-handshake"></i>
                                ),
                                label: (
                                    <Link to={"booking-manage"}>
                                        Quản lí đặt phòng
                                    </Link>
                                ),
                            },
                        ]}
                    />
                </div>
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <div className="flex justify-between mx-3">
                        <Button
                            type="text"
                            icon={
                                collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={() => hanldeClick()}
                            style={{
                                fontSize: "16px",
                                width: 64,

                                height: 64,
                            }}
                        />
                        <HeaderAdmin />
                    </div>
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
