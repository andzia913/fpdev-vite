import React from 'react';
import './location.css';

const Location = () => (
  <div className="fp__location section__margin" id="location">
    <h2 className="section-heading">Znajdź Nas!</h2>
    <div className="fp__location-content">
      <div className="fp__location-inv">
        <h3>Adres inwestycji</h3>
        <p>ul. Kaktusowa dz. nr 682 i 683</p>
        <p>59-100 Polkowice</p>
      </div>
      <div>
        <h3>Biuro sprzedaży</h3>
        <p>Centrum usług finansowych</p>
        <address>ul. Browarna 22, 59-100 Polkowice</address>
        <a className="fp__location-link" href="https://www.cuf.polkowice.pl/" target="_blank" rel="noreferrer">www.cuf.polkowice.pl</a>
        <a className="contact-button" href="tel:+48530222904"><i className="fa-solid fa-phone" />530 222 904</a>
        <a className="contact-button" href="mailto:e-mail: cuf@cuf.polkowice.pl"><i className="fa-solid fa-envelope" /> cuf@cuf.polkowice.pl</a>
      </div>
      <div>
        <h3>Siedziba dewelopera</h3>
        <p>FP Development Sp. z o.o.</p>
        <address>ul. Nadbrzeżna 10/1, 59-220 Legnica</address>
        <a className="contact-button" href="tel:+48539146127"><i className="fa-solid fa-phone" />539 146 127</a>
        <a className="contact-button" href="mailto:e-mail: biuro@fpdevelopment.com.pl"> <i className="fa-solid fa-envelope" /> biuro@fpdevelopment.com.pl</a>
      </div>
    </div>
    <div className="fp__location-map">
      {window.innerWidth > 500
        ? (
          <iframe
            title="location"
            width="500px"
            height="500px"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.6173108586756!2d16.049134680387507!3d51.50469232521447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f5dd027cc7d15%3A0x1568d3c9ff7ef80d!2sKaktusowa%2C%2059-100%20Polkowice!5e0!3m2!1spl!2spl!4v1686236486588!5m2!1spl!2spl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <iframe
            title="small-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6000354902026!2d16.0493278!3d51.502206799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f5dd027cc7d15%3A0x1568d3c9ff7ef80d!2sKaktusowa%2C%2059-100%20Polkowice!5e0!3m2!1spl!2spl!4v1689525399708!5m2!1spl!2spl"
            width="300"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}

    </div>
  </div>
);

export default Location;
