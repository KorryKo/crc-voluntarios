import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, ORG_NAME, INSTAGRAM_URL, INSTAGRAM_HANDLE, WHATSAPP_PHONE_FORMATTED, LOCATION } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold">{ORG_NAME}</h3>
            <p className="mt-2 text-sm text-white/80">
              Grupo de voluntarios dedicados al cuidado y adopción de perros en
              el Centro de Rescate Canino de Ñuñoa, Santiago, Chile.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold">Enlaces</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
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
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="mt-2 space-y-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                <Instagram size={20} />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
              <a
                href={`tel:${WHATSAPP_PHONE_FORMATTED.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
              >
                <Phone size={20} />
                <span>{WHATSAPP_PHONE_FORMATTED}</span>
              </a>
              <a
                href={LOCATION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/80 transition-colors hover:text-white"
              >
                <MapPin size={20} className="shrink-0 mt-0.5" />
                <span>{LOCATION.address}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} {ORG_NAME}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
