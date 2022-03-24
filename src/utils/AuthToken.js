import { useEffect } from "react";

export const AuthToken = ({ children }) => {
  // 本组件包裹在最外层用于校验是否登录
  useEffect(() => {
    // 这里是对是否有token的校验
  }, []);
  return children;
};
