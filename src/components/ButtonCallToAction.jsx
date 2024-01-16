import { Button } from "@mui/material";
import "../styles/ButtonCallToAction.css";

const ButtonCallToAction = () => {
  return (
    <Button
      className="button-call-to-action"
      variant="contained"
      color="accentColorRed"
      href="https://wa.me/5556903821?text=Hola%20me%20gustaría%20*recibir%20más%20información*."
    >
      Agendar&#160;cita
    </Button>
  );
};
export default ButtonCallToAction;
