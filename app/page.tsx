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
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DogGrid dogs={dogs} />
      </div>
      <AdoptionRules />
    </>
  );
}
