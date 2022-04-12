import { useCallback, useEffect, useState } from "react";

import { Tabs } from "@shopify/polaris";
import { v4 as uid } from "uuid";

/**
 * Tabs
 * @param {Object} {titles,fitted}
 * @returns { tabJSX,selected }
 */

export const useTabs = ({ titles = [], fitted = false }) => {
  // tabs选择处理函数和状态
  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback((selectedTabIndex) => setSelected(selectedTabIndex), []);
  //
  const tabs = titles.map((tab) => {
    return {
      id: `${uid()}`,
      content: tab,
      panelID: `${uid()}`,
    };
  });

  const tabJSX = (
    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted={fitted}></Tabs>
  );

  return {
    tabJSX,
    selected,
    setSelected,
  };
};
