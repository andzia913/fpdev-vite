import React from 'react';
import './header.css';

const Header = () => {
  window.addEventListener('scroll', () => {
    const elClasList = document.querySelector('.fp__header-img').classList;
    if (window.scrollY > 50) {
      elClasList.add('scale-img');
    } else if (elClasList.contains('scale-img')) elClasList.remove('scale-img');
  });
  return (
    <div className="fp__header" id="inwestycja">
      <div className="fp__header-content">
        <h2>Apartamenty <br /> KAKTUSOWA</h2>
        <picture className="fp__header-img" src="visualization-kaktusowa.jpg" alt="Polkowice nowe mieszkania - Apartamenty Kaktusowa wizualizacja bloku">
          <source srcSet="header-visual-s.jpg" media="(max-width: 450px)" />
          <source srcSet="header-visual-m.jpg" media="(max-width: 800px)" />
          <source srcSet="header-visual.jpg" />
          <img className="fp__header-img" alt="Polkowice nowe mieszkania - Apartamenty Kaktusowa wizualizacja bloku" />
        </picture>

      </div>
    </div>
  );
};

export default Header;

