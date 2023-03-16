import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: blueGrey[900],
    },
    primary: {
      main: "#6366f1",
    },
    secondary: {
      main: "#f43f5e",
    },
    error: {
      main: "#ef4444",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#101010",
        },
      },
    },
  },
});
