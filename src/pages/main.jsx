import "./Main.scss";

import { Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import React from "react";
import logo from "../assets/fastlane.png";
import logo2 from "../assets/logo2.png";
import { routes } from "@/configs/routes";
import { useRoutes } from "react-router-dom";
import { useToggle } from "ahooks";

const { Header, Content, Footer, Sider } = Layout;

const Main = () => {
  const elements = useRoutes(routes);

  // const [collapsed, setCollapsed] = useState(false);
  // const onCollapse = useCallback((collapsed) => setCollapsed(collapsed), []);
  const [collapsed, { toggle: onCollapse }] = useToggle();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{width:100}}>
        {/* 切换时候显示不同的图标,展开就是长图标, 收缩就是小图标 */}
        <div className="logo" style={{ display: "grid", placeItems: "center" }}>
          <img
            src={collapsed ? logo : logo2}
            alt="logo"
            style={!collapsed ? { height: 25, width: 124 } : { height: 25, width: 25 }}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: onCollapse,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {elements}
        </Content>
        <Footer style={{ textAlign: "center", color: "rgb(0,0,0,0.3)",paddingTop:8 }}>
          Fastlane ©2022 Created by Fastlane Digital Platform
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
