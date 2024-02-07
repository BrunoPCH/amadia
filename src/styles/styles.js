import { createTheme } from "@mui/material/styles";
const font = "'Noto Serif', 'serif'";
const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#343b47",
      contrastText: "#fff",
    },
    secondary: {
      main: "#b59549",
    },
    accentColorRed: {
      main: "#cba447",
      contrastText: "#222c38",
    },
    accentColorBlue: {
      main: "#5c7699",
      contrastText: "#ffffff",
    },
    text: {
      hint: "#6b1a0c",
      primary: "#303587",
    },
    divider: "#f2d05a",
    background: {
      paper: "#cbe0ff",
    },
  },
  typography: {
    fontFamily: font,
    fontSize: 16,
    button: {
      fontWeight: 600,
    },
  },
});
export default baseTheme;
