import { Frame, Loading } from "@shopify/polaris";
import React, { useCallback } from "react";
import {
  atom_loading,
  atom_toastActive,
  atom_toastError,
  atom_toastTip,
} from "@/store/global.atom";

import AuthToken from "@/components/AuthToken";
import { CustomToast } from "@/components/CustomToast";
import { Menu } from "./main.menu";
import { TopBarMenu } from "./main.header";
import logo from "../assets/img/logo.svg";
import { routes } from "@/configs/routes";
import { useRecoilState } from "recoil";
import { useRoutes } from "react-router-dom";

const Main = () => {
  const elements = useRoutes(routes);
  const [isLoading] = useRecoilState(atom_loading);
  // 全局顶部 loading 条
  const global_Loading = isLoading ? <Loading /> : null;
  // toast 提示
  const [active, setActive] = useRecoilState(atom_toastActive); // false
  const [content] = useRecoilState(atom_toastTip); // "toast message"
  const [error] = useRecoilState(atom_toastError); // false
  const toggleActive = useCallback(() => setActive((active) => !active), [setActive]);

  const Logo = {
    width: 120,
    topBarSource: logo,
    url: "/",
    accessibilityLabel: "PMP",
    contextualSaveBarSource: logo,
  };

  return (
    <AuthToken>
      <Frame logo={Logo} navigation={<Menu />} topBar={<TopBarMenu />}>
        <CustomToast active={active} content={content} toggleActive={toggleActive} error={error} />

        {global_Loading}
        {elements}
      </Frame>
    </AuthToken>
  );
};

export default Main;
