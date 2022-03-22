import { Button, Modal, Stack, ThemeProvider } from "@shopify/polaris";

import React from "react";

export const ConfirmDeleteModal = ({
  deleteComfirmActive,
  toggleDeleteComfirmActive,
  content = "items",
  handleConfirmDelete,
  buttonText = "Delete",
}) => {
  return (
    <Modal open={deleteComfirmActive} onClose={toggleDeleteComfirmActive} title="Confirm delete">
      <Modal.Section>Are you sure you want to delete the selected {content}?</Modal.Section>
      <Modal.Section>
        <Stack distribution="trailing">
          <Button onClick={toggleDeleteComfirmActive}>Cancel</Button>
          <ThemeProvider theme={{ colors: { primary: "#D82C0D" } }}>
            <Button primary onClick={handleConfirmDelete}>
              {buttonText}
            </Button>
          </ThemeProvider>
        </Stack>
      </Modal.Section>
    </Modal>
  );
};
