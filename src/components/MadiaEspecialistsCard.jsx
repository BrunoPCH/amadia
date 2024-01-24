import "../styles/MadiaEspecialistsCard.css";
import { Container } from "@mui/material";
import imgSpecialist from "../assets/specialist-4-3.jpg";
const MadiaEspecialistsCard = () => {
  return (
    <section>
      <Container maxWidth="lg" className="container-especialist-card">
        <div className="grid-container-especialist e2">
          <div className="grid-item-card-specialist-a e1">
            <h2 className="section-title font-light">
              Equipo de Especialistas
            </h2>
          </div>
          <div className="grid-item-card-specialist-b e1">
            <img
              className="img-specialist"
              src={imgSpecialist}
              alt="Acercamiento de hombres trabajando con una hoja de papel y un boligrafo"
            />
          </div>
          <div className="grid-item-card-specialist-c e1">
            <div>
              <h3 className="font-light">
                Somos un grupo conformado por{" "}
                <strong>abogados con más de 10 años de experiencia</strong>,
                egresados de las <em>mejores escuelas de Derecho</em>{" "}
                del&#160;país.
              </h3>
              <h3 className="font-light">
                Nuestra trayectoria nos ha llevado a colaborar con personajes
                distinguidos de la escena pública y la iniciativa privada,{" "}
                <strong>
                  dando siempre los resultados que más favorecen a
                  nuestros&#160;clientes.
                </strong>
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MadiaEspecialistsCard;
