"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, PawPrint, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Nuestros Perros" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <PawPrint
              size={24}
              className={`transition-colors duration-300 ${
                scrolled ? "text-secondary-500" : "text-white"
              }`}
            />
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
            >
              CRC Voluntarios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 ${
                      pathname === link.href
                        ? scrolled
                          ? "text-secondary-500 font-medium"
                          : "text-white font-medium"
                        : scrolled
                          ? "text-text-primary hover:text-secondary-500"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/adopcionescrc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                  className={`transition-colors duration-300 ${
                    scrolled
                      ? "text-text-primary hover:text-secondary-500"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 transition-colors duration-300 ${
              scrolled
                ? "text-text-primary hover:text-secondary-500"
                : "text-white hover:text-white/80"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className={`pb-4 rounded-b-xl ${scrolled ? "" : "bg-black/20 backdrop-blur-md px-4 rounded-xl"}`}>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 transition-colors ${
                      pathname === link.href
                        ? scrolled
                          ? "text-secondary-500 font-medium"
                          : "text-white font-medium"
                        : scrolled
                          ? "text-text-primary hover:text-secondary-500"
                          : "text-white/90 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/adopcionescrc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 py-2 transition-colors ${
                    scrolled
                      ? "text-text-primary hover:text-secondary-500"
                      : "text-white/90 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
