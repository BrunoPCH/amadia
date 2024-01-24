import { Button } from "@mui/material";
import "../styles/HeroButtonCallToAction.css";

const HeroButtonCallToAction = () => {
  return (
    <Button
      className="hero-button-call-to-action"
      variant="contained"
      color="accentColorRed"
      href="https://wa.me/5556903821?text=Hola%20me%20gustaría%20*recibir%20más%20información*."
    >
      Agenda gratis una llamada de 15&#160;minutos <wbr></wbr>y&#160;cuéntanos
      tu problema.
    </Button>
  );
};
export default HeroButtonCallToAction;
