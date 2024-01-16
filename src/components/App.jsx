import { useState } from "react";
import Header from "../components/Header.jsx";
import AboutCard from "../components/AboutCard.jsx";
import WhatsappFloatLogo from "../components/WhatsappFloatLogo.jsx";

import "../styles/App.css";

import { ThemeProvider } from "@mui/material";
import baseTheme from "../styles/styles";

function App() {
  const [theme, setTheme] = useState(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <WhatsappFloatLogo />
      <AboutCard />
    </ThemeProvider>
  );
}

export default App;
