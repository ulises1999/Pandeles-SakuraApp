import React from "react";

const Footer = () => {
  return (
    <div className="footerContainer">
    <footer className="footer">
      <div className="footer-bottom">
        <p className="pSinMargin">&copy; {new Date().getFullYear()} Sakura Bazar. Todos los derechos reservados.</p>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

