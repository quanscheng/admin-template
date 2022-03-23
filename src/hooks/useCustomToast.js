import { useCallback, useEffect, useState } from "react";

import { Toast } from "@shopify/polaris";

/**
 * Scope Toast message and error style
 * or Use multiple toast messages to inform the merchant about distinct actions.
 * @param {String} tip
 * @param {Boolean} err
 * @returns { active, content, error, toggleActive }
 */

export const useCustomToast = (tip, err) => {
  const [active, setActive] = useState(false); // false
  const [content, setContent] = useState(""); // "toast message"
  const [error, setError] = useState(false); // false

  const toggleActive = useCallback(() => setActive((active) => !active), [setActive]);

  // 自定义 Toast 信息和样式
  useEffect(() => {
    setContent(tip);
    setError(err);
  }, [tip, err, setContent, setError]);

  const toastMarkup = active ? (
    <Toast content={content} error={error} onDismiss={toggleActive} />
  ) : null;

  return {
    toastMarkup,
    toggleActive,
  };
};
