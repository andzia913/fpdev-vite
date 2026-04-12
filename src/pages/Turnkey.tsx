
import { Helmet } from 'react-helmet-async';
import { FiMail, FiPhone } from 'react-icons/fi';

const Turnkey = () => {
  return (
    <main className="bg-white">

      <Helmet>
        <title>Wykończenie mieszkań pod klucz - Polkowice</title>
        <meta
          name="description"
          content="Kompleksowe wykończenie mieszkań pod klucz w Polkowicach. Projekt, realizacja i pełne wsparcie."
        />
      </Helmet>

      {/* HERO */}
      <section className="pb-24 pt-48 text-center bg-gray-50 ">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Wykończenie mieszkań pod klucz
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Wprowadź się do gotowego mieszkania - my zajmiemy się resztą.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <p className="text-gray-600 leading-relaxed">
          W ramach inwestycji Apartamenty Kaktusowa oferujemy kompleksowe
          wykończenie mieszkań. Od projektu wnętrza aż po finalną realizację –
          wszystko w jednym miejscu.
        </p>
      </section>

      {/* PROJEKTANT */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Projektowanie wnętrz z doświadczonym projektantem
          </h2>

          <p className="mt-4 text-gray-600">
            Współpracujemy z Natalią Kostrzewską – absolwentką ASP we
            Wrocławiu. Jej projekty łączą estetykę z funkcjonalnością,
            inspirowane włoskim designem i sztuką.
          </p>

          <p className="mt-4 text-gray-600">
            Zapewniamy kompleksowe wsparcie – od koncepcji po realizację.
          </p>

          <a
            href="https://www.nataliakostrzewska.com/"
            target="_blank"
            className="inline-block mt-6 text-[var(--color-primary)] font-medium"
          >
            Zobacz portfolio →
          </a>
        </div>

        {/* OBRAZY */}
        <div className="grid grid-cols-2 gap-4">
          <img src="/project1.webp" alt="Projekt wnętrza 1" className="rounded-xl" />
          <img src="/project2.webp" alt="Projekt wnętrza 2" className="rounded-xl" />
          <img src="/project3.webp" alt="Projekt wnętrza 3" className="rounded-xl col-span-2" />
        </div>
      </section>

      {/* FESCO */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold">
            Realizacja – ponad 20 lat doświadczenia
          </h2>

          <img
            src="/logo-fesco.webp"
            alt="Fesco wykończenia mieszkań"
            className="h-48 mx-auto my-6"
          />

          <p className="text-gray-600">
            Realizację zapewnia firma PHU Fesco – doświadczony wykonawca
            współpracujący z największymi firmami budowlanymi w Polsce.
          </p>
        </div>
      </section>

      {/* PROCES */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Jak wygląda współpraca?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 shadow rounded-2xl">
            <h3 className="font-semibold">1. Konsultacja</h3>
            <p className="text-gray-600 mt-2">
              Poznajemy Twoje potrzeby i oczekiwania.
            </p>
          </div>

          <div className="p-6 shadow rounded-2xl">
            <h3 className="font-semibold">2. Projekt</h3>
            <p className="text-gray-600 mt-2">
              Tworzymy funkcjonalny i estetyczny projekt wnętrza.
            </p>
          </div>

          <div className="p-6 shadow rounded-2xl">
            <h3 className="font-semibold">3. Realizacja</h3>
            <p className="text-gray-600 mt-2">
              Kompleksowe wykończenie pod klucz.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--color-primary)] text-white text-center">
        <h2 className="text-2xl font-semibold">
          Zrealizuj swoje wymarzone mieszkanie
        </h2>

        <p className="mt-4">
          Skontaktuj się z nami i poznaj ofertę wykończenia pod klucz.
        </p>

        <div className="mt-6 flex justify-center gap-4 ">
          <a
            href="tel:+48507126941"
            className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FiPhone /> 507 126 941
          </a>

          <a
            href="mailto:cuf.polkowice@poczta.fm"
            className="border border-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <FiMail /> Napisz do nas
          </a>
        </div>
      </section>

    </main>
  );
};

export default Turnkey;