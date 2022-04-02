import { Button, Card, Layout, Page } from "@shopify/polaris";

import React from "react";
import { atom_loading } from "@/store/global.atom";
import { useGlobalToast } from "@/hooks/useGlobalToast";
import { useLocalStorageState } from "ahooks";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useTopLoading } from "@/hooks/useTopLoading";

export const Home = () => {
  const navigate = useNavigate();
  const [, setToken] = useLocalStorageState("token");

  const [, setLoading] = useRecoilState(atom_loading);
  // 全局toast
  const { toggleActive } = useGlobalToast("可以怎么设置就怎么设置");

  // top loading hook
  const { topLoadingJSX, showTopLoading, hiddenTopLoading } = useTopLoading();

  function imgs(arr) {
    return arr.map((o, index) => (
      <img
        key={index}
        alt=""
        width="100%"
        height="100%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
      />
    ));
  }
  return (
    <Page fullWidth title="您好! 张无忌" subtitle="下午好! 今天是fastlane陪伴你的第 xx 天">
      {topLoadingJSX}
      <Button
        onClick={() => {
          setToken();
        }}
      >
        清除token
      </Button>
      <Button
        onClick={() => {
          setToken(`123`);
        }}
      >
        修改token
      </Button>
      <Button onClick={() => setLoading(true)}>全局loading: true</Button>
      <Button onClick={() => setLoading(false)}>全局loading: fasle</Button>
      <Button onClick={showTopLoading}>loading hook: true</Button>
      <Button onClick={hiddenTopLoading}>loading hook: false</Button>
      <Button onClick={toggleActive}>toast</Button>
      <br />
      <br />
      <Layout>
        <Layout.Section oneThird>
          <Card sectioned>
            {imgs([1])}
            <Button onClick={() => navigate(`/partners`)}>点击前往伙伴示例</Button>
          </Card>
          <Card sectioned>{imgs([1, 1, 1])}这是展示的评论</Card>
        </Layout.Section>
        <Layout.Section oneThird>
          <Card sectioned>{imgs([1, 1])}这是展示的订单动态</Card>
        </Layout.Section>
        <Layout.Section oneThird>
          <Card sectioned>{imgs([1])}这是展示的其他想展示的信息</Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
