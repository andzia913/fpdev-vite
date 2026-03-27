import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inwestycja"
      className="relative w-full h-[90vh] min-h-[600px] flex items-center"
    >
      {/* IMAGE */}
      <picture className="absolute inset-0 w-full h-full overflow-hidden">
        <source srcSet="/header-visual-s.jpg" media="(max-width: 450px)" />
        <source srcSet="/header-visual-m.jpg" media="(max-width: 800px)" />
        <img
          src="/header-visual.jpg"
          alt="Apartamenty Kaktusowa - nowe mieszkania Polkowice"
          className={`w-full h-full object-cover transition-transform duration-700 ${
            scrolled ? "scale-105" : "scale-100"
          }`}
        />
      </picture>

      {/* PREMIUM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="max-w-xl text-left text-white">

            <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl leading-tight mb-6 drop-shadow-lg">
              Apartamenty <br /> KAKTUSOWA
            </h1>

            <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
              Nowoczesne mieszkania w Polkowicach. Komfort, przestrzeń i świetna lokalizacja.
            </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#offer"
                  className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md hover:bg-[var(--color-primary-hover)] transition shadow-lg"
                >
                  Sprawdź ofertę
                </a>

                <a
                  href="#about"
                  className="border border-white/70 px-6 py-3 rounded-md hover:bg-white hover:text-black transition backdrop-blur-sm"
                >
                  O inwestycji
                </a>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;