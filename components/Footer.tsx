import Link from "next/link";
import { Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Nuestros Perros" },
  { href: "/voluntariado", label: "Voluntariado" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold">CRC Voluntarios</h3>
            <p className="mt-2 text-sm text-white/80">
              Grupo de voluntarios dedicados al cuidado y adopción de perros en
              Santiago, Chile.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold">Síguenos</h3>
            <div className="mt-2">
              <a
                href="https://instagram.com/adopcionescrc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                <Instagram size={20} />
                <span>@adopcionescrc</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} CRC Voluntarios. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
