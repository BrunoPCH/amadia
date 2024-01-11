import { useState } from "react";
import Header from "../components/Header.jsx";

import "../styles/App.css";

import { Button, Paper, Typography, Box, ThemeProvider } from "@mui/material";
import baseTheme from "../styles/styles";

function App() {
  const [theme, setTheme] = useState(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
