import { useState } from "react";

interface SnackbarState<T> {
  isOpen: boolean;
  data: T | null;
}

export const useSnackbar = <T,>() => {
  const [SnackbarState, setSnackbarState] = useState<SnackbarState<T>>({
    isOpen: true,
    data: null,
  });

  const openSnackbar = (data: T | null = null) => {
    setSnackbarState((prevState) => ({ ...prevState, isOpen: true, data }));
  };

  const closeSnackbar = () => {
    setSnackbarState((prevState) => ({ ...prevState, isOpen: false }));
  };

  return {
    isOpen: SnackbarState.isOpen,
    data: SnackbarState.data,
    openSnackbar,
    closeSnackbar,
  };
};
