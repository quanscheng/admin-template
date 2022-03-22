import { Toast } from "@shopify/polaris";
import React from "react";
/*
 * @customToastActive : Boolean
 * @toggleCustomToastActive : Function
 * @toastMessage : String
 * @error : Boolean
 * 使用:
 *    1.定义状态
 *    2.引入组件
 *    3.状态驱动组件
 */
export const CustomToast = ({
  customToastActive,
  toggleCustomToastActive,
  toastMessage = "_Dev: CustomToast_has_no_message",
  error = false,
}) => {
  return customToastActive ? (
    <Toast content={toastMessage} onDismiss={toggleCustomToastActive} error={error} />
  ) : null;
};
