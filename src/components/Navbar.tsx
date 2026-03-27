import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  const links = [
    { href: "#about", label: "O inwestycji" },
    { href: "#features", label: "Zalety" },
    { href: "#offer", label: "Oferta" },
    { href: "#location", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white backdrop-blur shadow-sm`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="FP Development"
            className="h-10 w-auto"
          />
        </a>

        {/* MENU */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* PRAWA STRONA */}
        <div className="hidden md:flex items-center gap-6">

          {/* TELEFON */}
          <a
            href="tel:+48530222904"
            className="text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] transition"
          >
            530 222 904
          </a>

          {/* CTA */}
          <a
            href="#offer"
            className="bg-[var(--color-primary)] text-white text-sm px-5 py-2.5 rounded-md hover:bg-[var(--color-primary-hover)] transition"
          >
            Sprawdź ofertę
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <div className="lg:hidden">
          {toggleMenu ? (
            <RiCloseLine
              size={26}
              onClick={() => setToggleMenu(false)}
              className="cursor-pointer"
            />
          ) : (
            <RiMenu3Line
              size={26}
              onClick={() => setToggleMenu(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {toggleMenu && (
        <div className="lg:hidden bg-white border-t border-[var(--color-border)] px-6 py-8 space-y-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setToggleMenu(false)}
              className="block text-lg text-[var(--color-text)]"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-[var(--color-border)] space-y-4">

            <a
              href="tel:+48530222904"
              className="flex items-center justify-center gap-2 border border-[var(--color-primary)] text-[var(--color-primary)] py-3 rounded-md hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              <FiPhone className="text-lg" />
              Zadzwoń
            </a>

            <a
              href="#offer"
              className="block text-center bg-[var(--color-primary)] text-white py-3 rounded-md"
            >
              Sprawdź ofertę
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;