import React from "react";
import Feature from "../components/Feature";

const featuresData = [
  {
    img: "balcony.jpeg",
    title: "Ogródki i balkony",
    text: "Każde mieszkanie posiada balkon lub ogródek, który zapewnia przestrzeń do relaksu.",
    alt: "Balkon z roślinami",
  },
  {
    img: "elevator.jpeg",
    title: "Windy",
    text: "Nowoczesne windy zapewniają wygodny dostęp do wszystkich kondygnacji.",
    alt: "Winda w budynku",
  },
  {
    img: "heater.jpeg",
    title: "Ogrzewanie",
    text: "Pompy ciepła i nowoczesne rozwiązania zapewniają komfort i oszczędność.",
    alt: "Grzejnik w mieszkaniu",
  },
  {
    img: "buildings.jpeg",
    title: "Ergonomiczne budownictwo",
    text: "Funkcjonalne układy mieszkań i przemyślana przestrzeń.",
    alt: "Nowoczesne budynki mieszkalne Polkowice",
  },
];

const Features = () => (
  <section id="features" className="py-20 lg:py-28 bg-white">

    <div className="max-w-7xl mx-auto px-6 lg:px-10">

      <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl mb-16 text-center">
        Zalety inwestycji
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {featuresData.map((item, index) => (
          <Feature index={index} key={index} {...item} />
        ))}
      </div>

    </div>
  </section>
);

export default Features;