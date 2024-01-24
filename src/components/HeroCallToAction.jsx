import "../styles/HeroCallToAction.css";
import HeroButtonCallToAction from "../components/HeroButtonCallToAction.jsx";
import { Container } from "@mui/material";
const HeroCallToAction = () => {
  return (
    <section className="hero-call-to-action-container-wide">
      <Container className="hero-call-to-action-container-boxed" maxWidth="lg">
        <h2 className="hero-call-to-action-slogan font-light">
          <strong>
            No importa qué tan grande&#160;es&#160;el&#160;problema.<br></br>
            ¡Estamos para ayudar!
          </strong>
        </h2>
        <HeroButtonCallToAction />
      </Container>
    </section>
  );
};

export default HeroCallToAction;
