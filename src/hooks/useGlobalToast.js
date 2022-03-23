import { atom_toastActive, atom_toastError, atom_toastTip } from "@/store/global.atom";
import { useCallback, useEffect } from "react";

import { useRecoilState } from "recoil";

/**
 * Global Toast message and error style
 * @param {String} tip
 * @param {Boolean} err
 * @returns { active, content, error, toggleActive }
 */

export const useGlobalToast = (tip = "", err = false) => {
  const [active, setActive] = useRecoilState(atom_toastActive); // false
  const [content, setContent] = useRecoilState(atom_toastTip); // "toast message"
  const [error, setError] = useRecoilState(atom_toastError); // false

  const toggleActive = useCallback(() => setActive((active) => !active), [setActive]);

  // 自定义 Toast 信息和样式
  useEffect(() => {
    setContent(tip);
    setError(err);
  }, [tip, err, setContent, setError]);

  return {
    active,
    content,
    error,
    toggleActive,
  };
};
