import { ContextualSaveBar } from "@shopify/polaris";
import React from "react";

export const TopSaveBar = ({ isDirty, handleSave, handleDiscard, disabled = false }) => {
  return isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
        disabled,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;
};
