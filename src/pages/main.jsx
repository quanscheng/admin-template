import { Frame, Loading } from "@shopify/polaris";
import React, { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

import { CustomToast } from "@/components/CustomToast";
import { Menu } from "./main.menu";
import { TopBarMenu } from "./main.header";
import { atom_loading } from "@/store/global.atom";
import { routes } from "@/configs/routes";
import { useGlobalToast } from "@/hooks/useCustomToast";
import { useLocalStorageState } from "ahooks";
import { useRecoilState } from "recoil";

const Main = () => {
  const elements = useRoutes(routes);
  const navigate = useNavigate();
  const [token] = useLocalStorageState("token"); // 读取token
  const [isLoading] = useRecoilState(atom_loading);
  // 全局顶部 loading 条
  const global_Loading = isLoading ? <Loading /> : null;

  const { active, toggleActive, content, error } = useGlobalToast();

  useEffect(() => {
    console.log(token);
    if (token !== "admin") {
      navigate(`/login`);
    }
  }, [navigate, token]);

  return (
    <Frame navigation={<Menu />} topBar={<TopBarMenu />}>
      <CustomToast active={active} content={content} toggleActive={toggleActive} error={error} />

      {global_Loading}
      {elements}
    </Frame>
  );
};

export default Main;
