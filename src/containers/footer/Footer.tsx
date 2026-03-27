import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="footer__fp">
        <div className="footer__fp-address">
          <p>FP DEVELOPMENT SP. Z O.O.</p>
          <p>ul. Nadbrzeżna 10/1 <br />59-220 Legnica</p>
          <a href="+48000000000">Tel. 000 000 000</a>
          <p>Mail: mail@mail.pl</p>
        </div>
        <div className="footer__fp-data">
          <p>KRS: 0000864251</p>
          <p>NIP: 6912550934</p>
          <p>REGON 38735130800000</p>
        </div>
      </div>
      <div className="footer__seller">
        <p>Biuro sprzedaży</p>
        <p>Centrum Usług Finansowych Polkowice</p>
        <p>ul. Browarna 22, 59-100 Polkowice</p>
        <a href="tel: +48507126941">Tel. 507 126 941</a>
        <p>e-mail: cuf.polkowice@poczta.fm</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>Informacje zawarte na tej stronie mają charakter wyłącznie informacyjny. Nie stanowią one oferty handlowej w rozumieniu przepisów prawa. Choć dokładamy wszelkich starań, aby prezentowane treści były aktualne i zgodne z rzeczywistością, nie ponosimy odpowiedzialności za ewentualne błędy czy nieścisłości. Wszystkie decyzje podejmowane na podstawie informacji zawartych na tej stronie są związane z ryzykiem użytkownika. W przypadku jakichkolwiek wątpliwości lub potrzeby uzyskania bardziej szczegółowych informacji, zalecamy skontaktowanie się z nami bezpośrednio. Zastrzegamy sobie prawo do zmiany treści zawartych na stronie bez wcześniejszego powiadomienia. Wszelkie prawa do treści, grafik, czy innych elementów zamieszczonych na stronie są zastrzeżone.
</p>
      <p>@2023. Wszytskie prawa zastrzeżone.</p>
    </div>
  </div>
);

export default Footer;
