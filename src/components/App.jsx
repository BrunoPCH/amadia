import { useState } from "react";
import Header from "../components/Header.jsx";
import AboutCard from "../components/AboutCard.jsx";
import WhatsappFloatLogo from "../components/WhatsappFloatLogo.jsx";
import MadiaBenefitsCards from "../components/MadiaBenefitsCards.jsx";
import ExperticeAreasCard from "../components/ExperticeAreasCard.jsx";
import HeroCallToAction from "../components/HeroCallToAction.jsx";
import MadiaEspecialists from "./MadiaEspecialistsCard.jsx";
import Footer from "../components/Footer.jsx";

import "../styles/App.css";

import { ThemeProvider } from "@mui/material";
import baseTheme from "../styles/styles";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <WhatsappFloatLogo />
      <AboutCard />
      <MadiaBenefitsCards />
      <ExperticeAreasCard />
      <HeroCallToAction />
      <MadiaEspecialists />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
