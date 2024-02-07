import { Container, Grid } from "@mui/material";
import ImgMiss from "../components/ImgMiss.jsx";
import CallToActionCard from "../components/CalltoActionCard.jsx";
import "../styles/AboutCard.css";

const AboutCard = () => {
  return (
    <section>
      <Container maxWidth="lg" className="container-about-card">
        <Grid
          container
          spacing={2}
          //   padding={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
          className=" grid-container-about-card"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
            className="grid-column-left-card "
          >
            <h1 className="font-light">
              <strong>MADIA Abogados</strong>
            </h1>
            <h2 className="font-light">
              <strong>
                Experiencia y profesionalismo a&#160;tu&#160;servicio
              </strong>
            </h2>
            <h3 className="font-light">
              Sabemos que un <strong>problema legal</strong> es&#160;doblemente
              complicado cuando se&#160;involucra a la <strong>familia</strong>,
              déjalo&#160;en nuestras&#160;manos, tiene&#160;
              <strong>solución</strong>.
            </h3>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            lg={5}
            xl={5}
            className="grid-column-right-card"
          >
            <ImgMiss />
          </Grid>
        </Grid>
      </Container>
      <CallToActionCard />
    </section>
  );
};

export default AboutCard;
