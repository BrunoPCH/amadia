import { Container } from "@mui/material";
import "../styles/ExperticeAreasCard.css";
import ImgExperticeAreas from "../components/ImgExperticeAreas.jsx";
import ExperticeSection from "../components/ExperticeSection.jsx";
const ExperticeAreasCard = () => {
  return (
    <section>
      <Container maxWidth="lg" className="container-expertice-areas-card">
        <div className="grid-container-expertice-areas ">
          <div className="grid-item-card-a ">
            <h2 className="section-title font-dark">
              <em>Áreas de experiencia</em>
            </h2>
          </div>
          <div className="grid-item-card-b ">
            <ImgExperticeAreas></ImgExperticeAreas>
          </div>
          <div className="grid-item-card-c ">
            <h3 className="font-dark">
              En <strong>MADIA</strong> la{" "}
              <strong>familia es muy importante</strong> y&#160;por&#160;tal
              motivo nos comportamos bajo{" "}
              <em>estrictos códigos de&#160;ética</em>, destacando la&#160;
              <em>empatía, comprensión</em> y&#160;enfocamos nuestros esfuerzos
              en resolver casos relacionados&#160;con:
            </h3>
          </div>
        </div>
      </Container>
      <ExperticeSection />
    </section>
  );
};

export default ExperticeAreasCard;
