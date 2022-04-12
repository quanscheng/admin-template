import { Modal } from "@shopify/polaris";
import React from "react";

export const ConfirmDeleteModal = ({
  deleteComfirmActive,
  toggleDeleteComfirmActive,
  content = "items",
  handleConfirmDelete,
  buttonText = "Delete",
}) => {
  return (
    <Modal
      open={deleteComfirmActive}
      onClose={toggleDeleteComfirmActive}
      title="Confirm delete"
      primaryAction={{ destructive: true, content: buttonText, onAction: handleConfirmDelete }}
      secondaryActions={[{ content: "Cancel", onAction: toggleDeleteComfirmActive }]}
    >
      <Modal.Section>Are you sure you want to delete the selected {content}?</Modal.Section>
    </Modal>
  );
};
