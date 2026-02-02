import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import DogGrid from "@/components/DogGrid";
import AdoptionRules from "@/components/AdoptionRules";
import { dogs } from "@/data/dogs";

export const metadata: Metadata = {
  title: "Adopta un Perro | CRC Voluntarios",
  description:
    "Conoce a los perros disponibles para adopción en nuestro refugio en Santiago, Chile. Encuentra a tu nuevo compañero y dale un hogar.",
  openGraph: {
    title: "Adopta un Perro | CRC Voluntarios",
    description:
      "Conoce a los perros disponibles para adopción en nuestro refugio en Santiago, Chile.",
    url: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "CRC Voluntarios",
  description:
    "Grupo de voluntarios dedicados al rescate y adopción de perros en Santiago, Chile.",
  url: "https://crc-voluntarios.cl",
  sameAs: ["https://www.instagram.com/adopcionescrc"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection
        title="Nuestros Perros"
        subtitle="Conoce a los perros que buscan un hogar. Adopta, ven a visitarnos o comparte."
        cta={
          <a
            href="https://wa.me/56987997244?text=Hola%2C%20estoy%20interesado%20en%20adoptar%20un%20perro.%20%C2%BFCu%C3%A1ndo%20y%20c%C3%B3mo%20puedo%20visitarlos%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-3 text-lg font-semibold text-secondary-600 shadow-md transition hover:bg-secondary-50"
          >
            Quiero adoptar
          </a>
        }
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DogGrid dogs={dogs} />
      </div>
      <AdoptionRules />
    </>
  );
}
