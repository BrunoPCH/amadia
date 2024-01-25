import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import "../styles/Footer.css";
const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const [openTerms, setOpenTerms] = React.useState(false);

  const [scroll, setScroll] = React.useState("paper");
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenTerms = (scrollType) => () => {
    setOpenTerms(true);
    setScroll(scrollType);
  };

  const handleCloseTerms = () => {
    setOpenTerms(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <footer>
      <Button
        onClick={handleClickOpen("paper")}
        style={{ color: "#FFF", textTransform: "none" }}
      >
        Aviso de privacidad
      </Button>
      <Button
        onClick={handleClickOpenTerms("paper")}
        style={{ color: "#FFF", textTransform: "none" }}
      >
        Términos y condiciones
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="dialog-window"
      >
        <DialogTitle id="scroll-dialog-title" className="font-light">
          <Typography variant="h2" className="section-title">
            Aviso de privacidad
          </Typography>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="font-light"
            style={{ color: "var(--primary-color050)", fontWeight: "450" }}
          >
            <p className="font-light">
              El presente aviso de privacidad es aplicable a los datos
              personales y datos sensibles que sean recabados por{" "}
              <b>MADIA Abogados</b>a través de la página de internet
              _______________________.
            </p>
            <p>
              El responsable de recabar los datos personales es{" "}
              <b>MADIA Abogados</b>, con domicilio en la colonia Ampliación
              Daniel Garza, alcaldía Miguel Hidalgo, Ciudad de México, C.P.
              11850.
            </p>
            <p>
              Los datos personales recabados por el responsable serán únicamente
              los proporcionados por el cliente a través de la página de
              internet mencionada y los aportados durante la prestación de los
              servicios jurídicos contratados, <b>MADIA Abogados</b> o sus
              colaboradores en ninguna circunstancia solicitarán información
              personal que no tenga relación con la prestación de los servicios
              que se brindan.
            </p>
            <h3>Datos personales de identificación</h3>
            <p>
              Los datos de identificación del cliente incluyen información como:
              nombre, lugar de residencia, correo electrónico, número
              telefónico, entre otros que permitan a <b>MADIA Abogados</b>{" "}
              conocer la identidad del cliente, estos serán utilizados conforme
              a lo siguiente:
            </p>
            <ol>
              <li>
                Conocer la identidad del cliente de manera que su asesoría pueda
                ser individualizada.
              </li>
              <li>
                Hacerle llegar y solicitar al cliente material de apoyo
                referente al servicio que se brinda.
              </li>
              <li>
                Contactar al cliente con fines de seguimiento y solución a las
                controversias planteadas.
              </li>
              <li>
                Almacenamiento en la base de datos de <b>MADIA Abogados</b>, con
                fines de control de calidad y revisión de expedientes resueltos
                y en proceso.
              </li>
            </ol>
            <h3>Datos personales sensibles relacionados con la asesoría</h3>
            <p>
              Son datos sensibles relacionados con la asesoría aquellos que son
              revelados por el cliente con la finalidad de plantear la
              problemática y las dudas relacionadas con esta que desea le sean
              resueltas, tales como datos sobre sus condiciones familiares,
              situación económica, propiedades, estado mental, entre otros.
              Estos serán utilizados conforme a los siguientes fines:
            </p>
            <ol>
              <li>
                La finalidad principal de recabar estos datos es la precisión de
                la asesoría solicitada por el cliente
              </li>
              <li>
                La transmisión de dichos datos como antecedente al área de
                solución de conflictos de <b>MADIA Abogados</b>, en caso de que
                el cliente solicite la representación legal judicial o extra
                judicial
              </li>
              <li>Con fines de control de calidad</li>
              <li>
                Con fines de mejora de procesos y calidad en el servicio, para
                lo cual serán almacenadas las circunstancias involucradas en la
                problemática expuesta con el cliente, sin relacionarse de manera
                alguna con los datos de identificación que proporcione.
              </li>
            </ol>
            <h3>Mecanismos para limitar el uso de datos personales</h3>
            <p>
              Los datos personales proporcionados por el cliente que serán
              utilizados para brindar los servicios solicitados serán
              indispensables para su realización y deberán ser conservados hasta
              su conclusión.
            </p>
            <p>
              En caso de que el cliente requiera manifestar oposición o su deseo
              de limitar el uso o almacenamiento de los datos personales
              proporcionados con fines distintos a la prestación del servicio
              contratado, podrá hacerlo a través de los medios de contacto
              visibles en la página de internet, dicho mensaje deberá contener
              por lo menos los siguientes datos:
            </p>
            <ul>
              <li>a{") "}Asunto: limitación u oposición, datos personales</li>
              <li>b{") "}Nombre completo del cliente</li>
              <li>c{") "}Fecha y hora en que se realizó la asesoría</li>
              <li>
                d{")"}La oposición o limitación al uso o almacenamiento de sus
                datos personales
              </li>
            </ul>
            <p>
              El mensaje de referencia será respondido por <b>MADIA Abogados</b>{" "}
              en un plazo no mayor a cinco días hábiles solicitando confirmación
              de su solicitud y los términos de la misma, una vez confirmada la
              solicitud, dentro de los siguientes diez días hábiles{" "}
              <b>MADIA Abogados</b> enviará un mensaje notificando las medidas
              tomadas para la restricción al uso de sus datos personales o en su
              caso la eliminación permanente de su información contenida en las
              bases de datos.
            </p>
            <h3>Temporalidad</h3>
            <p>
              Los datos personales proporcionados por el cliente serán
              utilizados y almacenados el tiempo necesario para cumplir con los
              fines descritos en el presente aviso, siempre y cuando el cliente
              no manifieste su oposición o solicite su limitación conforme a lo
              previsto en el apartado anterior.
            </p>
            <h3>Uso y Divulgación</h3>
            <p>
              Los datos personales recabados conforme a lo descrito en el
              presente aviso serán utilizados para los fines señalados en el
              mismo, para lo cual serán proporcionados a los colaboradores de
              <b> MADIA Abogados</b>, quienes podrán descargar la información
              proporcionada en los equipos de cómputo que sean utilizados en la
              prestación del servicio contratado.
            </p>
            <p>
              Con excepción de los supuestos contemplados en los párrafos que
              anteceden ni <b>MADIA Abogados</b>, ni sus colaboradores
              transmitirán o divulgarán información alguna proporcionada por el
              cliente de conformidad con el presente aviso a persona alguna.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{
              color: "#FFF",
              textTransform: "none",
            }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openTerms}
        onClose={handleCloseTerms}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="dialog-window"
      >
        <DialogTitle id="scroll-dialog-title" className="font-light">
          <Typography variant="h2" className="section-title">
            Términos y condiciones
          </Typography>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            className="font-light"
            style={{ color: "var(--primary-color050)", fontWeight: "450" }}
          >
            <p>
              Los presentes términos y condiciones son aplicables a la
              prestación de los servicios jurídicos prestados por{" "}
              <b>MADIA Abogados</b>a través de la página de internet
            </p>
            <ol>
              <li>
                El objeto de los servicios prestados a través de la página de
                internet señalada es la asesoría y cotización de los servicios
                jurídicos solicitados con fines preventivos o resolutivos
              </li>
              <li>
                Los servicios descritos en el numeral que antecede tienen la
                finalidad de esclarecer la situación legal del usuario y su
                costo aproximado, incluido el planteamiento de posibles
                soluciones a la problemática expuesta
              </li>
              <li>
                Una vez se envíe el mensaje de primer contacto,{" "}
                <b>MADIA Abogados</b>
                responderá el mismo tan pronto como sea posible con la finalidad
                de que el cliente proporcione un horario en el que pueda ser
                contactado por uno de nuestros colaboradores
              </li>
              <li>
                La asesoría gratuita durará un máxim de 15 minutos y tendrá
                siempre la intención de reunir la mayor cantidad de datos
                posibles para elaborar una cotización del servicio requerido
              </li>
              <li>
                En caso de que el cliente solicite una cotización por escrito,
                esta le será enviada en un máximo de 36 horas
              </li>
              <li>
                Al solicitar la cotización gratuita, el cliente autoriza a MADIA
                Abogados para dar seguimiento a través de los medios de contacto
                proporcionados por este con la finalidad de esclarecer dudas o
                formalizar la contratación de los servicios solicitados
              </li>
              <li>
                En caso de que el cliente esté de acuerdo con la cotización y
                desee contratar los servicios de <b>MADIA Abogados</b>, las
                partes se sujetan a los términos y condiciones establecidas en
                el contrato de prestación de servicios que al efecto se firme
              </li>
              <li>
                Al solicitar información a través de la página de internet
                _____________________, el usuario acepta los presentes términos
                y condiciones y el aviso de privacidad que puede ser consultado
                en _______________________
              </li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseTerms}
            style={{
              color: "#FFF",
              textTransform: "none",
            }}
          >
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </footer>
  );
};
export default Footer;

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
