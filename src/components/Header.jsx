import { Button, Box, Container, Grid, Hidden } from "@mui/material";
import "../styles/Header.css";
const Header = () => {
  return (
    <header xs={12} sm={12} md={12} lg={12} xl={12}>
      <Container className="e1" maxWidth="lg">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
            Logo
          </Grid>
          <Grid item xs={8} sm={8} md={10} lg={10} xl={10}>
            <Hidden only="xs">
              <h3 className="call-to-action">
                Agenda gratis una llamada de 15 minutos y cuéntanos tu problema
              </h3>
            </Hidden>
            <Button variant="contained" color="accentColor">
              Agendar cita
            </Button>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
export default Header;
