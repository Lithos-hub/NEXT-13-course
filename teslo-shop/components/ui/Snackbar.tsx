import { useSnackbar } from "@/hooks";
import { Alert, Snackbar } from "@mui/material";
import React, { FC } from "react";
import { useEffect } from "react";

type Props = {
  message: string;
  severity: "error" | "success";
};

const CustomSnackbar: FC<Props> = ({ message, severity }) => {
  const snackbar = useSnackbar();

  useEffect(() => {
    setTimeout(() => snackbar.closeSnackbar(), 3000);
  }, [snackbar]);

  return (
    <Snackbar open={snackbar.isOpen} autoHideDuration={3000}>
      <Alert
        onClose={() => snackbar.closeSnackbar()}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
