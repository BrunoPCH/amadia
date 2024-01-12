import { Button } from "@mui/material";
import "../styles/ButtonCallToAction.css";

const ButtonCallToAction = () => {
  return (
    <Button
      className=""
      variant="contained"
      color="accentColor"
      href="https://wa.me/5556903821?text=Estoy%20interesado%20en%20agendar%20una%20cita..."
    >
      Agendar&#160;cita
    </Button>
  );
};
export default ButtonCallToAction;
