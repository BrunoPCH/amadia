import logoImage from "../assets/madia-logo-web.svg";
import "../styles/Logo.css";

const Logo = () => {
  return (
    <>
      <img src={logoImage} className="logo-home" alt="Madia logo" />
    </>
  );
};

export default Logo;
