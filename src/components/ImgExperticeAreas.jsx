import "../styles/ImgExperticeAreas.css";
import imgExperticeFamilyMd from "../assets/familia-600.webp";
import imgExperticeFamilySm from "../assets/familia-300.webp";
import imgExperticeFamilyLg from "../assets/familia-900.webp";
const ImgExperticeAreas = () => {
  return (
    <>
      <img
        className="img-expertice-area"
        src={imgExperticeFamilyMd}
        srcSet={`${imgExperticeFamilySm} 300w, ${imgExperticeFamilyMd} 600w, ${imgExperticeFamilyMd}   900w, ${imgExperticeFamilyLg} 1200w`}
        alt="Familia: Padre, madre e hija abrazados"
      />
    </>
  );
};
export default ImgExperticeAreas;
