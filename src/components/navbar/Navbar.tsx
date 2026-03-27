import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // eslint-disable-next-line no-console
  console.log('nicnie dziala');
  return (
    <div className="fp__navbar">
      <div className="fp__navbar-links">
        <div className="fp__navbar-links_logo">
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,jsx-a11y/anchor-is-valid */}
          <a href="#"><img src="logo.svg" alt="Logi firmy FP development - budowa nowych mieszkań Kaktusowa Polkowice" /></a>
        </div>
        <div className="fp__navbar-links_container">
          <p><a className="fp__navbar-links_container_el" href="#about">O inwestycji</a></p>
          <p><a className="fp__navbar-links_container_el" href="#features">Zalety</a></p>
          <p><a className="fp__navbar-links_container_el" href="#offer">Oferta</a></p>
          <p><a className="fp__navbar-links_container_el" href="#location">Kontakt</a></p>
          <p><a className="fp__navbar-links_container_el" href="#blog">Dowiedz się więcej!</a></p>
        </div>
      </div>
      <div className="fp__navbar-phone">
        <p>
          <i className="fa-solid fa-phone" />
          <a href="tel:+48530222904">530 222 904</a>
        </p>
      </div>
      <div className="fp__navbar-side-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="fp__navbar-side-menu_container scale-up-center">
          <div className="fp__navbar-side-menu_container-links">
            <p><a className="fp__navbar-links_container_el" href="#about">O inwestycji</a></p>
            <p><a className="fp__navbar-links_container_el" href="#features">Zalety</a></p>
            <p><a className="fp__navbar-links_container_el" href="#offer">Oferta</a></p>
            <p><a className="fp__navbar-links_container_el" href="#location">Kontakt</a></p>
            <p><a className="fp__navbar-links_container_el" href="#blog">Dowiedz się więcej!</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
