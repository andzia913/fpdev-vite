import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const links = [
    { href: "/#about", label: "O inwestycji" },
    { href: "/#features", label: "Zalety" },
    { href: "/#offer", label: "Oferta" },
    { href: "/#location", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-3">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="FP Development"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </a>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={link.href}
              className="relative text-base font-medium text-gray-600 hover:text-black transition
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
              after:bg-[var(--color-primary)] after:transition-all hover:after:w-full"
            >
              {link.label}
            </HashLink>
          ))}
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-6">

          {/* PHONE */}
          <a
            href="tel:+48530222904"
            className="text-base font-medium text-gray-700 hover:text-[var(--color-primary)] transition"
          >
            530 222 904
          </a>

          {/* CTA */}
          <HashLink
            smooth
            to="/#offer"
            className="bg-[var(--color-primary)] text-white text-base px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            Sprawdź ofertę
          </HashLink>
        </div>

        {/* MOBILE BUTTON */}
        <div className="lg:hidden">
          {toggleMenu ? (
            <RiCloseLine
              size={30}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu3Line
              size={30}
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {toggleMenu && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-6">

          {links.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={link.href}
              onClick={() => setToggleMenu(false)}
              className="block text-lg font-medium text-gray-800"
            >
              {link.label}
            </HashLink>
          ))}

          <div className="pt-6 border-t space-y-4">

            <a
              href="tel:+48530222904"
              className="flex items-center justify-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] py-3 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              <FiPhone className="text-lg" />
              Zadzwoń
            </a>

            <HashLink
              smooth
              to="/#offer"
              className="block text-center bg-[var(--color-primary)] text-white py-3 rounded-lg"
            >
              Sprawdź ofertę
            </HashLink>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;