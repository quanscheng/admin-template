import React from "react";
import { Toast } from "@shopify/polaris";

/**
 * @param { active , toggleActive , content , error }
 * @returns <Toast />
 */

export const CustomToast = ({ active, toggleActive, content, error = false }) => {
  return active ? <Toast content={content} onDismiss={toggleActive} error={error} /> : null;
};
