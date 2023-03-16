import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: blueGrey[100],
    },
    primary: {
      main: "#9333ea",
    },
    secondary: {
      main: "#db2777",
    },
    error: {
      main: "#ef4444",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});
