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
              <em>MADIA Abogados</em>
            </h1>
            <h2 className="font-light">
              Experiencia y profesionalismo a&#160;tu&#160;servicio
            </h2>
            <h3 className="font-light">
              Sabemos que un <em>problema legal</em> es&#160;doblemente
              complicado cuando se&#160;involucra a la <em>familia</em>,
              déjalo&#160;en nuestras&#160;manos, tiene&#160;<em>solución</em>.
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
