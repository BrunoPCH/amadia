import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0a325a",
      contrastText: "#fff",
    },
    secondary: {
      main: "#6b1a0c",
    },
    accentColorRed: {
      main: "#d51219",
      contrastText: "#ffffff",
    },
    accentColorBlue: {
      main: "#006fff",
      contrastText: "#ffffff",
    },
    text: {
      hint: "#6b1a0c",
      primary: "#303587",
    },
    divider: "#00acc1",
    background: {
      paper: "#cbe0ff",
    },
  },
  typography: {
    fontFamily: ["Noto Serif", "serif"].join(","),
    fontSize: 16,
    button: {
      fontWeight: 600,
    },
  },
});
export default baseTheme;
