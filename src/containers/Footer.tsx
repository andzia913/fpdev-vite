import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 mt-20">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

  {/* LOGO / OPIS */}
  <div className="space-y-4 text-sm">
    <h3 className="text-white text-lg font-semibold">
      FP Development
    </h3>

    <p className="text-gray-500 leading-relaxed">
      Nowoczesne mieszkania w Polkowicach. Tworzymy przestrzenie do życia,
      które łączą komfort, estetykę i funkcjonalność.
    </p>
  </div>

  {/* DEVELOPER */}
  <div className="space-y-3 text-sm">
    <h4 className="text-white font-semibold">Deweloper</h4>

    <div className="flex items-start gap-2">
      <FiMapPin className="mt-1 text-gray-500" />
      <p>
        ul. Nadbrzeżna 10/1 <br />
        59-220 Legnica
      </p>
    </div>

    <a href="tel:+48884288898" className="flex items-center gap-2 hover:text-white transition">
      <FiPhone /> 884 288 898
    </a>

    <a href="mailto:mail@mail.pl" className="flex items-center gap-2 hover:text-white transition">
      <FiMail /> biuro@fpdevelopment.com.pl
    </a>
  </div>

  {/* SPRZEDAŻ */}
  <div className="space-y-3 text-sm">
    <h4 className="text-white font-semibold">Biuro sprzedaży</h4>

    <div className="flex items-start gap-2">
      <FiMapPin className="mt-1 text-gray-500" />
      <p>
        ul. Browarna 22 <br />
        59-100 Polkowice
      </p>
    </div>

    <a href="tel:+48507126941" className="flex items-center gap-2 hover:text-white transition">
      <FiPhone /> 507 126 941
    </a>

    <a href="mailto:cuf.polkowice@poczta.fm" className="flex items-center gap-2 hover:text-white transition">
      <FiMail /> cuf.polkowice@poczta.fm
    </a>
    </div>

    </div>
      <p className="text-center">
        Informacje zawarte na stronie mają charakter informacyjny i nie stanowią
        oferty handlowej w rozumieniu Kodeksu cywilnego.
      </p>

      <p className="text-gray-600 text-center">
        © 2026 FP Development. Wszelkie prawa zastrzeżone.
      </p>
  </footer>
  );
};

export default Footer;