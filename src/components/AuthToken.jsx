import { useEffect } from "react";
import { useLocalStorageState } from "ahooks";
import { useNavigate } from "react-router-dom";

const AuthToken = ({ children }) => {
  const navigate = useNavigate();
  const [token] = useLocalStorageState("token"); // 读取token

  useEffect(() => {
    console.log(token);
    if (token !== "admin") {
      navigate(`/login`);
    }
  }, [navigate, token]);

  return children;
};

export default AuthToken;
