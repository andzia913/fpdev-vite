import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      
      <div className="text-center max-w-xl">

        {/* 404 */}
        <h1 className="text-7xl font-bold text-[var(--color-primary)]">
          404
        </h1>

        {/* HEADLINE */}
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-gray-800">
          Strona nie została znaleziona
        </h2>

        {/* DESC */}
        <p className="mt-4 text-gray-600 leading-relaxed">
          Wygląda na to, że strona której szukasz nie istnieje lub została przeniesiona.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-xl shadow hover:opacity-90 transition"
          >
            Wróć na stronę główną
          </Link>

          <HashLink
            smooth
            to="/#offer"
            className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
          >
            Zobacz ofertę
          </HashLink>

        </div>

        {/* BONUS UX */}
        <p className="mt-8 text-sm text-gray-400">
          Jeśli problem się powtarza — skontaktuj się z nami.
        </p>

      </div>
    </main>
  );
};

export default NotFound;