import { Frame } from "@shopify/polaris";
import { Menu } from "./main.menu";
import React from "react";
import { TopBarMenu } from "./main.header";
import { routes } from "@/configs/routes";
import { useRoutes } from "react-router-dom";

const Main = () => {
  const elements = useRoutes(routes);

  return (
    <Frame navigation={<Menu />} topBar={<TopBarMenu />}>
      {elements}
    </Frame>
  );
};

export default Main;
