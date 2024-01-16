import whatsappIcon from "../assets/whatsapp-logo-01.svg";
import "../styles/WhatsappFloatLogo.css";
const WhatsappFloatLogo = () => {
  return (
    <div className="container-whatsapp-button">
      <a href="https://wa.me/5556903821?text=Hola%20me%20gustaría%20*recibir%20más%20información*.">
        <img
          src={whatsappIcon}
          className="whatsapp-icon"
          alt="Icono de whatsapp"
        />
      </a>
    </div>
  );
};
export default WhatsappFloatLogo;
