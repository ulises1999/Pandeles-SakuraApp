import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sobre nosotros</h3>
          <p>
            Sakura Bazar es un espacio dedicado a ofrecer productos únicos con
            inspiración japonesa. Encuentra lo mejor en calidad y diseño.
          </p>
        </div>
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <p>Email: info@sakurabazar.com</p>
          <p>Teléfono: +54 11 1234 5678</p>
          <p>Dirección: Av. Japón 123, Buenos Aires</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sakura Bazar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

