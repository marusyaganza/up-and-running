import React from "react";
import { Snackbar as UISnackbar, Alert } from "@mui/material";

interface SnackbarProps {
  message?: string;
  variant?: "success" | "error";
  open?: boolean;
  onClose?: () => void;
}

export const Snackbar = ({
  message,
  variant = "success",
  open,
  onClose,
}: SnackbarProps) => {
  return (
    <div>
      <UISnackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={onClose}
      >
        <Alert onClose={onClose} severity={variant} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </UISnackbar>
    </div>
  );
};
