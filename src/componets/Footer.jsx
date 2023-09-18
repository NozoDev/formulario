import React from "react";

const Footer = () => {
  return (
    <footer className="footer__content">
      &copy; derechos reservados by nozodev {new Date().getFullYear()}
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/kevin-oswaldo-rojas-velandia-73a343241/"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/NozoDev" target="_blank">
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
