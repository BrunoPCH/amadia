import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0a325a",
      contrastText: "#ffebee",
    },
    secondary: {
      main: "#6b1a0c",
    },
    accentColor: {
      main: "#D51219",
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
    button: {
      fontWeight: 600,
    },
  },
});
export default baseTheme;
