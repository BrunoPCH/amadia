import { Container } from "@mui/material";
import "../styles/BenefitsSection.css";

const benefits = [
  {
    id: "1",
    iconUrl: "src/assets/low-cost-icon.svg",
    description:
      "<em>Atención profesional</em> de primer nivel a un <strong>costo&#160;accesible</strong>.",
    altImageText: "Ícono de precios accesibles",
  },
  {
    id: "2",
    iconUrl: "src/assets/trade-icon.svg",
    description:
      "Evita gastos sorpresa, el&#160;<strong>presupuesto de la cotización es el&#160;costo&#160;total</strong>.",
    altImageText: "Ícono de costo total",
  },
  {
    id: "3",
    iconUrl: "src/assets/privacy-icon.svg",
    description:
      "Tratamos tu asunto con&#160;<em>absoluta confidencialidad</em>.",
    altImageText: "Ícono de confidencialidad",
  },
  {
    id: "4",
    iconUrl: "src/assets/client-service.svg",
    description: "<strong>Atención inmediata</strong> y&#160;transparente.",
    altImageText: "Ícono de atención inmediata y transparente",
  },
];

const BenefitsSection = () => {
  const benefitsItems = benefits.map((benefit) => (
    <article key={benefit.id} className="benefit-container ">
      <img
        src={benefit.iconUrl}
        className="benefit-icon"
        alt={benefit.altImageText}
      />
      <h4
        className="font-light benefit-description"
        dangerouslySetInnerHTML={{ __html: benefit.description }}
      ></h4>
    </article>
  ));
  return (
    <div className=" benefit-wide-section">
      <Container maxWidth="lg" className="benefits-section ">
        {benefitsItems}
      </Container>
    </div>
  );
};

export default BenefitsSection;
