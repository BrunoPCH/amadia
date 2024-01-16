import { Button, Container, Grid } from "@mui/material";
// import ButtonCallToAction from "../components/ButtonCallToAction";
import "../styles/CallToActionCard.css";

const CallToActionCard = () => {
  return (
    <Container maxWidth="lg" className="call-to-action-card-container">
      <Grid container spacing={2} marginTop={0} alignItems="center">
        <Grid
          item
          xs={12}
          sm={9}
          md={8}
          lg={9}
          xl={10}
          className="call-to-action-card-left-column"
        >
          <h2 className="call-to-action-card-title">
            Solicita una cotización sin costo. <wbr></wbr>Agenda&#160;gratis una
            llamada de&#160;15&#160;minutos y&#160;cuéntanos tu&#160;problema.
          </h2>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          md={4}
          lg={3}
          xl={2}
          className="call-to-action-card-right-column "
        >
          <Button
            className="button-call-to-action-blue"
            variant="contained"
            color="primary"
            href="https://wa.me/5556903821?text=Hola%20me%20gustaría%20*recibir%20más%20información*."
          >
            Agendar&#160;cita
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CallToActionCard;
