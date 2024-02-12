import { Container, Grid } from "@mui/material";
import LogoBenefits from "../components/LogoBenefits.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import "../styles/MadiaBenefitsCards.css";

const MadiaBenefitsCards = () => {
  return (
    <section id="valores">
      <Container maxWidth="lg" className="container-benefits-card">
        <h2 className="font-light section-title">
          ¿Por qué elegir a MADIA&#160;Abogados?
        </h2>
        <Grid
          container
          className=" grid-container-benefits-card"
          direction={{
            xs: "column-reverse !important",
            sm: "column-reverse !important",
            md: "row !important",
            lg: "row !important",
            xl: "row !important",
          }}
          alignItems={{
            xs: "",
            sm: " ",
            md: "",
            lg: "",
            xl: "",
          }}
          justifyContent={{
            xs: "",
            sm: "",
            md: "",
            lg: "",
            xl: "",
          }}
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className="">
            <h3 className="font-light section-sumary">
              Somos un <em>grupo de abogados</em> que se rigen bajo los
              principios de <strong>honestidad y profesionalismo</strong>,
              <wbr></wbr> actuando siempre bajo las siguientes premisas:
            </h3>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            xl={4}
            className=" container-logo"
          >
            <LogoBenefits></LogoBenefits>
          </Grid>
        </Grid>
      </Container>
      <BenefitsSection />
    </section>
  );
};

export default MadiaBenefitsCards;
