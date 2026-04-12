import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-400 mt-20">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* DEVELOPER */}
        <div className="space-y-3 text-sm">
          <h3 className="text-white font-semibold tracking-wide">
            FP Development
          </h3>

          <div className="flex items-start gap-2">
            <FiMapPin className="mt-1 text-gray-500" />
            <p>
              ul. Nadbrzeżna 10/1 <br />
              59-220 Legnica
            </p>
          </div>

          <a
            href="tel:+48884288898"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiPhone /> 884 288 898
          </a>

          <a
            href="mailto:mail@mail.pl"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiMail /> biuro@fpdevelopment.com.pl
          </a>

          <div className="text-xs text-gray-600 pt-2 space-y-1">
            <p>KRS: 0000864251</p>
            <p>NIP: 6912550934</p>
            <p>REGON: 38735130800000</p>
          </div>
        </div>

        {/* SALES */}
        <div className="space-y-3 text-sm">
          <h3 className="text-white font-semibold tracking-wide">
            Biuro sprzedaży
          </h3>

          <p className="text-gray-400">
            Centrum Usług Finansowych
          </p>

          <div className="flex items-start gap-2">
            <FiMapPin className="mt-1 text-gray-500" />
            <p>
              ul. Browarna 22 <br />
              59-100 Polkowice
            </p>
          </div>

          <a
            href="tel:+48507126941"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiPhone /> 507 126 941
          </a>

          <a
            href="mailto:cuf.polkowice@poczta.fm"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FiMail /> cuf.polkowice@poczta.fm
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 text-xs text-gray-500 leading-relaxed text-center space-y-3">

        <p>
          Informacje mają charakter informacyjny i nie stanowią oferty handlowej.
        </p>

        <p className="text-gray-600">
          © 2026 FP Development
        </p>

      </div>

    </footer>
  );
};

export default Footer;