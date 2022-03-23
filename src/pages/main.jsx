import { Frame, Loading } from "@shopify/polaris";
import React, { useCallback, useEffect } from "react";
import {
  atom_loading,
  atom_toastActive,
  atom_toastError,
  atom_toastTip,
} from "@/store/global.atom";
import { useNavigate, useRoutes } from "react-router-dom";

import { CustomToast } from "@/components/CustomToast";
import { Menu } from "./main.menu";
import { TopBarMenu } from "./main.header";
import { routes } from "@/configs/routes";
import { useLocalStorageState } from "ahooks";
import { useRecoilState } from "recoil";

const Main = () => {
  const elements = useRoutes(routes);
  const navigate = useNavigate();
  const [token] = useLocalStorageState("token"); // 读取token
  const [isLoading] = useRecoilState(atom_loading);
  // 全局顶部 loading 条
  const global_Loading = isLoading ? <Loading /> : null;
  // toast 提示
  const [active, setActive] = useRecoilState(atom_toastActive); // false
  const [content] = useRecoilState(atom_toastTip); // "toast message"
  const [error] = useRecoilState(atom_toastError); // false
  const toggleActive = useCallback(() => setActive((active) => !active), [setActive]);

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
