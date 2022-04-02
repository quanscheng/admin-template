import { Loading } from "@shopify/polaris";
import { useMemo } from "react";
import { useToggle } from "ahooks";

/**
 * shopify
 * @returns obj{ topLoadingJSX, showTopLoading, hiddenTopLoading }
 */
export const useTopLoading = () => {
  const [isLoading, { setRight: showTopLoading, setLeft: hiddenTopLoading }] = useToggle();
  const topLoadingJSX = useMemo(() => (isLoading ? <Loading /> : null), [isLoading]);

  return {
    topLoadingJSX,
    showTopLoading,
    hiddenTopLoading,
  };
};
