import { useCallback, useState } from "react";

import { Tabs } from "@shopify/polaris";

/**
 * Tabs
 * @param {Object} {titles,iden,fitted}
 * @returns { tabJSX,selected }
 */

export const useTabs = ({ titles, iden = "", fitted }) => {
  const tabs = titles.map((tab) => {
    return {
      id: `_id_${tab}_${iden}`,
      content: tab,
      panelID: `_panelID_${tab}_${iden}`,
    };
  });
  // tabs选择处理函数和状态
  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);

  const tabJSX = (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted={fitted}></Tabs>
  );

  return {
    tabJSX,
    selected,
  };
};
