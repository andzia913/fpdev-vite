import { useEffect } from "react";
import { FiPhone } from "react-icons/fi";

const ZmianyLokatorskie = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="bg-[var(--color-bg-soft)] py-16">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Zmiany lokatorskie – mieszkania Polkowice
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            Dopasuj swoje mieszkanie do własnych potrzeb jeszcze na etapie budowy.
            Sprawdź, jakie zmiany możesz wprowadzić w Apartamentach Kaktusowa w Polkowicach.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 space-y-6 text-gray-700 leading-relaxed">

          <p>
            Zmiany lokatorskie to możliwość dostosowania mieszkania jeszcze przed jego odbiorem.
            Dzięki temu możesz stworzyć przestrzeń idealnie dopasowaną do swojego stylu życia.
          </p>

          <p>
            W inwestycji Apartamenty Kaktusowa w Polkowicach umożliwiamy wprowadzenie
            szeregu zmian, które zwiększają komfort i funkcjonalność mieszkania.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold pt-4">
            Jakie zmiany są możliwe?
          </h2>

          <ul className="list-disc pl-5 space-y-2">
            <li>zmiana układu ścian działowych</li>
            <li>modyfikacja instalacji elektrycznej</li>
            <li>dostosowanie punktów oświetlenia</li>
            <li>zmiany w układzie kuchni i łazienki</li>
          </ul>

          <div className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-xl p-6">
            <p className="font-medium text-gray-800">
              Dzięki zmianom lokatorskim możesz zaplanować mieszkanie dokładnie tak,
              jak tego potrzebujesz – bez kosztownych przeróbek po odbiorze.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold pt-4">
            Kiedy można wprowadzić zmiany?
          </h2>

          <p>
            Najlepszy moment na wprowadzenie zmian to etap budowy stanu deweloperskiego.
            Wszystkie modyfikacje wymagają wcześniejszego uzgodnienia z deweloperem.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold pt-4">
            Mieszkania Polkowice – dopasowane do Ciebie
          </h2>

          <p>
            Apartamenty Kaktusowa to nowoczesne mieszkania w Polkowicach,
            które możesz dopasować do swoich potrzeb. To idealne rozwiązanie
            dla osób, które nie chcą iść na kompromisy.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-[var(--color-primary)] text-white rounded-2xl p-8 md:p-10 text-center shadow-lg">

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Zaplanuj swoje mieszkanie już teraz
          </h2>

          <p className="mb-6 text-white/90">
            Skontaktuj się z nami i sprawdź, jakie zmiany możesz wprowadzić
            w swoim przyszłym mieszkaniu w Polkowicach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="tel:+48884288898"
              className="bg-white text-black px-6 py-3 rounded-md font-medium hover:opacity-90 transition flex items-center gap-2 justify-center"
            >
              <FiPhone /> 884 288 898
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

export default ZmianyLokatorskie;