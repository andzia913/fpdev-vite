import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Location = () => {
  return (
    <section id="location" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

      {/* HEADER */}
      <div className="mb-14 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Lokalizacja i kontakt
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
          Sprawdź gdzie powstaje inwestycja i skontaktuj się z nami, aby poznać szczegóły oferty.
        </p>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT */}
        <div className="space-y-8">

          {/* ADRES */}
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FiMapPin className="text-[var(--color-primary)]" />
              Adres inwestycji
            </h3>
            <p className="text-[var(--color-text-muted)]">
              ul. Kaktusowa dz. nr 682 i 683
            </p>
            <p className="text-[var(--color-text-muted)]">
              59-100 Polkowice
            </p>
          </div>

          {/* BIURO */}
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              Biuro sprzedaży
            </h3>

            <p className="text-[var(--color-text-muted)]">
              Centrum usług finansowych
            </p>

            <address className="not-italic text-[var(--color-text-muted)] mb-4">
              ul. Browarna 22, Polkowice
            </address>

            <a
              href="https://www.cuf.polkowice.pl/"
              target="_blank"
              rel="noreferrer"
              className="block text-[var(--color-primary)] mb-4 hover:opacity-80 transition"
            >
              www.cuf.polkowice.pl
            </a>

            <div className="flex flex-wrap gap-3">

              <a
                href="tel:+48530222904"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm shadow hover:scale-105 transition"
              >
                <FiPhone /> 530 222 904
              </a>

              <a
                href="mailto:cuf@cuf.polkowice.pl"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition"
              >
                <FiMail /> E-mail
              </a>

            </div>
          </div>

          {/* DEVELOPER */}
          <div className="bg-white/80 backdrop-blur p-6 rounded-2xl shadow-md">
            <h3 className="font-semibold text-lg mb-3">
              Deweloper
            </h3>

            <p className="text-[var(--color-text-muted)]">
              FP Development Sp. z o.o.
            </p>

            <address className="not-italic text-[var(--color-text-muted)] mb-4">
              ul. Nadbrzeżna 10/1, Legnica
            </address>

            <div className="flex flex-wrap gap-3">

              <a
                href="tel:+48539146127"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)] text-white text-sm shadow hover:scale-105 transition"
              >
                <FiPhone /> 539 146 127
              </a>

              <a
                href="mailto:biuro@fpdevelopment.com.pl"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-sm hover:bg-gray-200 transition"
              >
                <FiMail /> E-mail
              </a>

            </div>
          </div>

        </div>

        {/* MAPA */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg">

          {/* miękki overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          <iframe
            title="mapa"
            src="https://www.google.com/maps?q=Kaktusowa%20Polkowice&output=embed"
            className="w-full h-[400px] md:h-[520px] border-0"
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
};

export default Location;