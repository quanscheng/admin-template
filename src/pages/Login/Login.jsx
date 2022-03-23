import { Button } from "@shopify/polaris";
import React from "react";
import { useLocalStorageState } from "ahooks";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [, setToken] = useLocalStorageState("token");
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        setToken("admin");
        navigate("/");
      }}
    >
      设置token为: admin
    </Button>
  );
};
