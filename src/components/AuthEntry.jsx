import { useEffect } from "react";

const AuthEntry = ({ children }) => {
  useEffect(() => {
    // 判断token
  }, []);
  return children;
};

export default AuthEntry;
