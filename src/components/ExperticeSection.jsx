import { Container } from "@mui/material";
import "../styles/ExperticeSection.css";

const areas = [
  {
    id: 1,
    title: "Herencias",
    description:
      "Cumple la <em>última voluntad</em> de tu <em>ser querido</em> y <strong>protege a los tuyos</strong> (<strong>testamentarios e intestados</strong>).",
  },
  {
    id: 2,
    title: "Divorcios",
    description:
      "¿Sabías que desde el 2008 <strong>la única causal que se necesita es que no quieras seguir casado</strong>?",
  },
  {
    id: 3,
    title: "Pensión alimenticia",
    description:
      "¿Sabías que así como los niños piden alimentos a los papás, también <strong>los adultos mayores pueden pedir alimentos a&#160;sus&#160;hijos</strong>?",
  },
  {
    id: 4,
    title: "Guarda y custodia",
    description:
      "<strong>Protege a tus hijos y procura su estabilidad emocional</strong>.",
  },
  {
    id: 5,
    title: "Juicios de interdicción",
    description:
      "Si tienes un <strong>familiar adulto incapaz de conducirse con autonomía</strong>, protégelo con un <strong>tutor que vele por sus&#160;intereses</strong>.",
  },
];
const ExperticeSection = () => {
  const areasItems = areas.map((area) => (
    <article key={area.id} className="expertice-areas-item">
      <h4 className="expertice-area-title font-light">
        <strong>{area.title}</strong>
      </h4>
      <p
        className="expertice-area-description font-light"
        dangerouslySetInnerHTML={{ __html: area.description }}
      ></p>
    </article>
  ));
  return (
    <Container maxWidth="lg" className="container-expertice-areas">
      {areasItems}
    </Container>
  );
};
export default ExperticeSection;
