import { atom } from "recoil";
import { v4 as uid } from "uuid";
// 顶部加载条
export const atom_loading = atom({
  key: uid(),
  default: false,
});
// toast
export const atom_toastActive = atom({
  key: uid(),
  default: false,
});
// toast 自定义信息
export const atom_toastTip = atom({
  key: uid(),
  default: "toast message",
});
// toast 是否为红色
export const atom_toastError = atom({
  key: uid(),
  default: false,
});
