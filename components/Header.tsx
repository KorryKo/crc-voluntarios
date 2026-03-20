"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Inicio" },
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
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-20" : "h-24"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-crc.png"
              alt="Logo Agrupación Voluntarios del rescate Canino ONG"
              width={40}
              height={40}
              className={`rounded-full transition-all duration-300 ${scrolled ? "w-10 h-10" : "w-10 h-10 lg:w-12 lg:h-12"}`}
            />
            <span
              className={`flex flex-col leading-tight font-bold transition-colors duration-300 ${
                scrolled ? "text-text-primary" : "text-white"
              }`}
            >
              <span className="text-base sm:text-lg">Agrupación Voluntarios</span>
              <span className="text-sm sm:text-base font-semibold opacity-80">del rescate Canino ONG</span>
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
