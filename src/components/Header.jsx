import Logo from "../components/Logo";
import ButtonCallToAction from "../components/ButtonCallToAction";
import { Container, Hidden } from "@mui/material";
import "../styles/Header.css";
const Header = () => {
  return (
    <header xs={12} sm={12} md={12} lg={12} xl={12}>
      <Container className="e2 container-header" maxWidth="lg">
        <Logo />
        <div className="container-call-to-action-elements e2">
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
