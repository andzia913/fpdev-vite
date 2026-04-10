import React from "react";

const OfferDetails = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

      {/* HEADER */}
      <div className="mb-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Apartamenty Kaktusowa
        </h2>
        <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
          Nowoczesna inwestycja realizowana w trzech etapach – zaprojektowana z myślą o komforcie mieszkańców i wysokim standardzie wykonania.
        </p>
      </div>

      {/* ETAPY */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">

        {/* ETAP 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-2">
            Etap I <span className="text-[var(--color-primary)]">A</span>
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            44 mieszkania (1–2 pokoje)
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            31–77 m²
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            Parking podziemny – 44 miejsca
          </p>
        </div>

        {/* ETAP 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-2">
            Etap II <span className="text-[var(--color-primary)]">B</span>
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            30 mieszkań (1–5 pokoi)
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            39–98 m²
          </p>
        </div>

        {/* ETAP 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-xl font-semibold mb-2">
            Etap III <span className="text-[var(--color-primary)]">C</span>
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] mb-2">
            31 mieszkań (1–5 pokoi)
          </p>
          <p className="text-sm text-[var(--color-text-muted)]">
            39–87 m²
          </p>
        </div>

      </div>

      {/* STANDARD */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 md:p-10">

        <h4 className="text-2xl font-semibold mb-6">
          Standard wykończenia
        </h4>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">

          {[
            "Ławy fundamentowe z izolacją przeciwwilgociową",
            "Ściany nośne Silka 18 i 24 cm",
            "Ściany działowe Silka 8 i 12 cm",
            "Strop jednolity lany",
            "Schody żelbetowe",
            "Tynki gipsowe maszynowe",
            "Ocieplenie styropianem",
            "Tynk silikonowo-silikatowy",
            "Szlichta cementowa",
            "Dachówka ceramiczna Roben",
            "Ocieplenie dachu wełną mineralną",
            "Okna 3-komorowe Drutex",
            "Rolety elektryczne",
            "Drzwi antywłamaniowe",
            "Ogrzewanie podłogowe",
            "Piec gazowy Viessmann",
            "Instalacja wod-kan",
            "Instalacja elektryczna",
            "Instalacja TV",
            "Przyłącze pod kuchnię elektryczną",
            "Ogrodzenia między działkami",
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="mt-1 w-2 h-2 bg-[var(--color-primary)] rounded-full" />
              <span>{item}</span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default OfferDetails;