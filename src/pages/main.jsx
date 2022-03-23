import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

import { Frame } from "@shopify/polaris";
import { Menu } from "./main.menu";
import { TopBarMenu } from "./main.header";
import { routes } from "@/configs/routes";
import { useLocalStorageState } from "ahooks";

const Main = () => {
  const elements = useRoutes(routes);
  const navigate = useNavigate();

  const [token] = useLocalStorageState("token"); // 读取token

  useEffect(() => {
    console.log(token);
    if (token !== "admin") {
      navigate(`/login`);
    }
  }, [navigate, token]);

  return (
    <Frame navigation={<Menu />} topBar={<TopBarMenu />}>
      {elements}
    </Frame>
  );
};

export default Main;
