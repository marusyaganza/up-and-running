import { Box, Typography, Modal as MUIModal } from "@mui/material";
import { PropsWithChildren } from "react";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const Modal = ({
  open,
  onClose: handleClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <MUIModal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {children}
        </Typography>
      </Box>
    </MUIModal>
  );
};
