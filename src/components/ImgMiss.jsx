// import imgMissImage from "../assets/senora-e-hija.png";
import imgMissImageSx from "../assets/senora-e-hija-600.webp";

import imgMissImageLg from "../assets/senora-e-hija-900.webp";
import "../styles/ImgMiss.css";

const ImgMiss = () => {
  return (
    <>
      <img
        src={imgMissImageSx}
        srcSet={`${imgMissImageSx} 300w, ${imgMissImageSx} 600w, ${imgMissImageLg}   900w, ${imgMissImageLg} 1200w`}
        className="ImageMiss"
        alt="Señora e hija en familia"
      />
    </>
  );
};

export default ImgMiss;
