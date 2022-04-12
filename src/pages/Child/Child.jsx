import { Button, Page } from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useCustomToast } from "@/hooks/useCustomToast";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { useTabs } from "@/hooks/useTabs";

const Child = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  // Toast
  const { toastMarkup: toast1, toggleActive: toggle1 } = useCustomToast("自定义的内容1");
  const { toastMarkup: toast2, toggleActive: toggle2 } = useCustomToast("自定义的内容2", true);

  // DeleteModal
  const handleDelete = useCallback(() => {
    console.log("删除操作");
  }, []);
  const { DelModalJSX, toggle } = useDeleteModal({ handleDelete });

  // tabs
  const [tabs, setTabs] = useState(["张无忌", "周芷若", "赵敏"]);
  const { tabJSX, selected } = useTabs({ titles: tabs });

  useEffect(() => {
    // 可以直接获取对应 选中的tab序号  路由的参数等
  }, [selected, location, params]);

  return (
    <Page title="Child">
      {toast1}
      {toast2}
      {DelModalJSX}

      <Button onClick={() => navigate(-1)}>回退上一页</Button>
      <Button onClick={toggle1}>toast1</Button>
      <Button onClick={toggle2}>toast2</Button>

      <Button onClick={toggle}>delete modal</Button>
      <Button onClick={() => setTabs(["张翠山", "成昆", "谢逊", "张三丰"])}>切换tabs1</Button>
      <Button onClick={() => setTabs(["张无忌", "周芷若", "赵敏"])}>切换tabs</Button>
      {tabJSX}
    </Page>
  );
};

export default Child;
