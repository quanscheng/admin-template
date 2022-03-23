import { ContextualSaveBar } from "@shopify/polaris";
import { useState } from "react";

/**
 * ContextualSaveBar
 * @param {Function} handleSave
 * @param {Function} handleDiscard
 * @returns {topBarJSX,setIsDirty,setDisabled}
 */

export const useTopSaveBar = (
  handleSave = () => {
    console.log("handleSave: 没有函数");
  },
  handleDiscard = () => {
    console.log("handleDiscard: 没有函数");
  }
) => {
  const [isDirty, setIsDirty] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const topBarJSX = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        content: "Save",
        onAction: handleSave,
        disabled,
      }}
      discardAction={{
        content: "Discard",
        onAction: handleDiscard,
      }}
    />
  ) : null;

  return {
    topBarJSX,
    setIsDirty,
    setDisabled,
  };
};
