import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    img: 'balcony.jpeg',
    imgsmall: 'balcony-s.jpeg',
    title: 'Ogródki i balkony',
    alt: 'Ogródki i balkony Apartamenty Kaktusowa Polkowice Mieszkania',
    text: 'W tej wyjątkowej inwestycji, każde mieszkanie jest stworzone z myślą o Twoim komforcie i przyjemności z życia na świeżym powietrzu. Każdy apartament, bez względu na piętro, jest wyposażony w urokliwy balkon lub ogródek, który stanie się Twoją prywatną oazą spokoju i relaksu. Apartamenty na parterze oferują malownicze ogródki, które stanowią idealne miejsce do spotkań z rodziną i przyjaciółmi, a także do uprawy kwiatów i warzyw. ',
  },
  {
    img: 'elevator.jpeg',
    imgsmall: 'elevator-s.jpeg',
    title: 'Windy',
    alt: 'Windy w każdej klatce Apartamenty Kaktusowa Polkowice Mieszkania',
    text: 'Wszystko zostało zaplanowane z myślą o Twojej wygodzie i łatwości poruszania się w budynku. Bez względu na to, w którym miejscu znajduje się twoje nowe mieszkanie, możesz być pewien, że dostęp do niego będzie łatwy i wygodny. Każda część budynku jest wyposażona w nowoczesne windy, które zapewniają szybki i sprawnie działający transport na wyższe piętra. Dzięki temu nie tylko oszczędzasz czas i wysiłek, ale także zyskujesz pełną dostępność do wszystkich części budynku.',
  },
  {
    img: 'heater.jpeg',
    imgsmall: 'heater-s.jpeg',
    title: 'Ogrzewanie',
    alt: 'Nowoczesne ogrzewanie Apartamenty Kaktusowa Polkowice Mieszkania',
    text: 'Z myślą o Twoim komforcie i ekologicznym podejściu, w naszej inwestycji zastosowaliśmy nowoczesne rozwiązania technologiczne. Ogrzewanie w każdym mieszkaniu będzie zapewniane przez pompy ciepła woda-powietrze, które są nie tylko efektywne energetycznie, ale także przyjazne dla środowiska. Dodatkowo, w każdym mieszkaniu znajdzie się termostat, który umożliwia precyzyjną kontrolę temperatury w pomieszczeniach. Będziesz miał pełną swobodę w dostosowywaniu klimatu do swoich preferencji i potrzeb. ',
  },
  {
    img: 'buildings.jpeg',
    imgsmall: 'buildings-s.jpeg',
    title: 'Ergonomiczne budownictwo',
    alt: 'Ergonomia w budownictwie Apartamenty Kaktusowa Polkowice Mieszkania',
    text: 'Nasza inwestycja wyróżnia się także ergonomicznym podejściem do budownictwa, które ma na celu zapewnienie maksymalnego komfortu i funkcjonalności. Projektujemy przestrzenie mieszkalne w taki sposób, aby optymalnie wykorzystać dostępną powierzchnię i stworzyć harmonijną przestrzeń życiową. Każdy detal jest starannie przemyślany, począwszy od przestronnych wnętrz, aż po ergonomicznie zaprojektowane układy pomieszczeń. Dbamy o wygodę i funkcjonalność, tworząc miejsca do pracy, odpoczynku i spędzania czasu z rodziną i przyjaciółmi.',
  },
];

const Features = () => (
  <div className="fp__features section__margin" id="features">
    <div className="fp__features-container">
      {featuresData.map((item, index) => (
        <Feature
          title={item.title}
          text={item.text}
          img={item.img}
          imgsmall={item.imgsmall}
          key={item.title + index}
        />
      ))}
    </div>
  </div>
);

export default Features;
