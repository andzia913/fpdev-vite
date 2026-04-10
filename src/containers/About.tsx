import React from "react";
import Description from "../components/Description";

const About = () => {
  return (
    <section id="about">

      {/* STICKY HERO */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">

        <div className="parallax-section min-h-[70vh] flex items-center"/>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" >

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 h-full flex flex-col justify-center text-white">

            <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl mb-6 drop-shadow-lg">
              O inwestycji Apartamenty Kaktusowa
            </h2>

            <p className="text-lg md:text-xl leading-relaxed max-w-2xl drop-shadow-md">
              Wyjątkowa inwestycja w spokojnej okolicy, gdzie przyroda spotyka się
              z nowoczesnością. Tworzymy przestrzeń pełną harmonii, komfortu i wysokiego standardu życia.
            </p>
              <div className="max-w-3xl mb-16">
                <p className="pt-10 text-lg leading-relaxed">
                  Inwestycja podzielona jest na trzy etapy, obejmujące starannie zaprojektowane budynki,
                  tworzące spójną i estetyczną zabudowę z zieloną przestrzenią wspólną.
                </p>
              </div>

          </div>
        </div>
      </div>

      <div className="bg-[var(--color-bg-soft)] py-20 lg:py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <Description
              title="Dostęp i parking"
              img="car.jpg"
              alt="Samochód na drodze"
              text="Wygodne drogi dojazdowe oraz parking zewnętrzny i podziemny zapewniają komfort i bezpieczeństwo."
            />

            <Description
              title="Różnorodność"
              img="window.jpg"
              alt="Okno"
              text="Przestronne mieszkania z dużą ilością światła i wysoką jakością wykonania."
            />

            <Description
              title="Natura"
              img="jogging.jpg"
              alt="Jogging"
              text="Bliskość terenów zielonych sprzyja aktywnemu i spokojnemu stylowi życia."
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;