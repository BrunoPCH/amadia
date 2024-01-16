import Logo from "../components/Logo";
import ButtonCallToAction from "../components/ButtonCallToAction";
import { Container, Hidden } from "@mui/material";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <Container className=" container-header" maxWidth="lg">
        <Logo />
        <div className="container-call-to-action-elements ">
          <Hidden only="xs">
            <h2 className="call-to-action">
              Agenda gratis una llamada de 15&#160;minutos y&#160;cuéntanos tu
              problema
            </h2>
          </Hidden>
          <ButtonCallToAction />
        </div>
      </Container>
    </header>
  );
};
export default Header;
