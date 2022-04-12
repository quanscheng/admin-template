import { Modal } from "@shopify/polaris";
import { useBoolean } from "ahooks";

/**
 * Delete confirm Modal
 * @param {Object} { title,content,buttonText,handleDelete }
 * @returns { DelModalJSX, toggle };
 */

export const useDeleteModal = ({
  title = "Confirm delete",
  content = "Are you sure you want to delete the xxxxxxxxx ?",
  buttonText = "Delete",
  handleDelete = () => {
    console.log("handleDelete: 没有函数");
  },
}) => {
  const [state, { toggle }] = useBoolean();

  const DelModalJSX = (
    <Modal
      open={state}
      onClose={toggle}
      title={title}
      primaryAction={{ destructive: true, content: buttonText, onAction: handleDelete }}
      secondaryActions={[{ content: "Cancel", onAction: toggle }]}
    >
      <Modal.Section>{content}</Modal.Section>
    </Modal>
  );
  return {
    DelModalJSX,
    toggle,
  };
};
