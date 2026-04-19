import { useEffect } from "react";
import { FiPhone } from "react-icons/fi";

const BezpiecznyKredyt = () => {

  // scroll na górę
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[var(--color-bg-soft)] py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Bezpieczny kredyt 2% – mieszkania Polkowice
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            Sprawdź, jak skorzystać z programu Bezpieczny kredyt 2% i kupić
            mieszkanie w Polkowicach na preferencyjnych warunkach.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-6 text-gray-700 leading-relaxed">

          <p>
            Bezpieczny kredyt 2% to program, który umożliwia zakup mieszkania
            na wyjątkowo korzystnych warunkach. Dzięki dopłatom państwowym,
            przez pierwsze 10 lat realne oprocentowanie wynosi około 2%.
          </p>

          <p>
            Maksymalna kwota kredytu to aż <strong>500 tys. zł</strong> dla jednej osoby
            oraz <strong>600 tys. zł</strong> dla małżeństw lub rodzin z dzieckiem.
            To realna szansa na zakup mieszkania w Polkowicach.
          </p>

          <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl p-6">
            <p className="font-medium text-gray-800">
              Program obejmuje zarówno rynek pierwotny, jak i wtórny – bez limitów ceny za m².
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold pt-4">
            Dlaczego warto?
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>niższe raty przez pierwsze 10 lat</li>
            <li>duża dostępność mieszkań</li>
            <li>brak limitów ceny za metr</li>
            <li>możliwość zakupu w Polkowicach</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold pt-4">
            Lista banków
          </h2>

          <p>
            Program realizowany jest przez wiele banków, m.in.:
          </p>

          <ul className="list-disc pl-5 space-y-1">
            <li>Alior Bank</li>
            <li>Bank Pekao</li>
            <li>PKO BP</li>
            <li>SGB Bank</li>
            <li>VeloBank</li>
          </ul>

          <div className="pt-6 border-t">

            <p className="mb-4">
              Aktualna lista dostępna jest na stronie:
            </p>

            <a
              href="https://www.gov.pl/web/rozwoj-technologia/bezpieczny-kredyt"
              target="_blank"
              className="text-[var(--color-primary)] underline"
            >
              www.gov.pl/bezpieczny-kredyt
            </a>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 text-center shadow-lg">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Pomagamy w uzyskaniu kredytu
          </h2>

          <p className="mb-6 text-white/90">
            Wspieramy Cię na każdym etapie – od sprawdzenia zdolności kredytowej
            po finalną decyzję i zakup mieszkania.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:+48507126941"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition flex items-center gap-2 justify-center"
            >
              <FiPhone /> 507 126 941
            </a>

            <a
              href="/#offer"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition"
            >
              Zobacz mieszkania
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default BezpiecznyKredyt;