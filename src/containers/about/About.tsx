import React from 'react';
import './about.css';
import Description from '../../components/description/Description';

const About = () => (
  <div
    className="about"
    id="about"
  >
    <div className="about-heading">
      <h1>O inwestycji Apartamenty Kaktusowa</h1>
      <p>To wyjątkowa Inwestycja w spokojnej okolicy gdzie przyroda spleciona jest z
        tchnieniem nowoczesności. W tę piękną przestrzeń, zanurzoną w urokach natury, zaczynamy naszą
        ekscytującą podróż do nowego mieszkania, które przyniesie nowe życie i inspirację. To będzie oaza
        spokoju, harmonii i nowoczesności, która zdefiniuje nowy standard życia dla mieszkańców tego urokliwego
        zakątka.
        Inwestycja jest podzielona na trzy etapy, a każdy z nich będzie owocował nowym starannie zaprojektowanym
        budynkiem, wybudowanym z dbałością o najdrobniesze szczegóły aby zapewnić doskonałe warunki dla
        przyszłych mieszkańców. Wszystkie trzy etapy będą sie składać na malowniczą zabudowę w kształcie litery
        C z piękną, zieloną przestrzenią wspólną na froncie.
      </p>
    </div>
    <div className="about-container">
      <Description
        title="Dostęp i parking"
        img="car.jpg"
        alt="Samochód na drodze"
        text="Doskonale zaplanowane drogi dojazdowe umożliwiają wygodne i bezproblemowe dotarcie do twojego przyszłego domu. Natężenie ruchu jest minimalne, co przyczynia się do spokojnej atmosfery w okolicy. Twoje potrzeby i komfort są dla nas najważniejsze, dlatego stworzyliśmy idealne warunki dla Twojego samochodu.Na terenie inwestycji znajdziesz zarówno parking zewnętrzny, jak i podziemny, zapewniające bezpieczne i wygodne miejsca do parkowania. "
      />

      <Description
        title="Różnorodność"
        img="window.jpg"
        alt="Okno z dekoracjami na parapecie"
        text="Przestronne apartamenty będą obfitować w naturalne światło, które wtapiając się w przestrzeń, podkreśli piękno wnętrza. Wykorzystanie wysokiej jakości materiałów i nowoczesnych technologii zapewni nie tylko niezrównane piękno, ale także trwałość i energooszczędność. Zamysłem projetu było stworzenie mieszkań o maksymalnym komforcie i wygodzie, zapewniając mieszkańcom doskonałe warunki do życia."
      />

      <Description
        title="Natura"
        img="jogging.jpg"
        alt="Kobieta uprawiająca jogging"
        text=" Lokalizacja tej inwestycji jest absolutnie wyjątkowa. Bliskość zabytkowego parku oraz rozciągającego się w pobliżu lasu sprawiają, że mieszkańcy będą mieli nieograniczony dostęp do natury i spokojnych terenów rekreacyjnych. Możliwość relaksu na świeżym powietrzu, spacery i aktywność fizyczna stanie się integralną częścią codziennego życia, co zapewni harmonię i równowagę między aktywnym stylem życia a chwilami wytchnienia"
      />
    </div>
  </div>
);

export default About;
