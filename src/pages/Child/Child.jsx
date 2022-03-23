import { Button, Page } from "@shopify/polaris";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { useCustomToast } from "@/hooks/useCustomToast";
import { useDeleteModal } from "@/hooks/useDeleteModal";
import { useTabs } from "@/hooks/useTabs";
import { useTopSaveBar } from "@/hooks/useTopSaveBar";

const Child = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  // Toast
  const { toastMarkup: toast1, toggleActive: toggle1 } = useCustomToast("自定义的内容1");
  const { toastMarkup: toast2, toggleActive: toggle2 } = useCustomToast("自定义的内容2", true);

  // ContextualSaveBar
  const handleTopSave = useCallback(() => {
    console.log(1);
  }, []);
  const handleTopDiscard = useCallback(() => {
    console.log(2);
  }, []);
  const { topBarJSX, setIsDirty, setDisabled } = useTopSaveBar(handleTopSave, handleTopDiscard);

  // DeleteModal
  const handleDelete = useCallback(() => {
    console.log("删除操作");
  }, []);
  const { DelModalJSX, toggle } = useDeleteModal({ handleDelete });

  // tabs
  const [tabs, setTabs] = useState(["all", "张无忌", "周芷若", "赵敏"]);
  const { tabJSX, selected } = useTabs({ titles: tabs });

  useEffect(() => {
    // console.log("location: ", location);
    // console.log("params: ", params["*"]);
    console.log("selected: ", selected);
  }, [location, params, selected]);

  return (
    <Page title="Child">
      {toast1}
      {toast2}
      {topBarJSX}
      {DelModalJSX}

      <Button onClick={() => navigate(-1)}>回退上一页</Button>
      <Button onClick={toggle1}>toast1</Button>
      <Button onClick={toggle2}>toast2</Button>
      <Button onClick={() => setIsDirty(true)}>topbar show</Button>
      <Button onClick={() => setIsDirty(false)}>topbar hidden</Button>
      <Button onClick={() => setDisabled(true)}>topbar disabled-T</Button>
      <Button onClick={() => setDisabled(false)}>topbar disabled-F</Button>
      <Button onClick={toggle}>delete modal</Button>
      <Button
        onClick={() => {
          setTabs(["all", "张无忌", "周芷若"]);
        }}
      >
        切换tabs
      </Button>
      {tabJSX}
    </Page>
  );
};

export default Child;
