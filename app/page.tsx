import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import DogGrid from "@/components/DogGrid";
import AdoptionRules from "@/components/AdoptionRules";
import { getDogs } from "@/lib/dogs";

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
  alternates: {
    canonical: "/",
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

export default async function Home() {
  const dogs = await getDogs();
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
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-secondary-700 shadow-xl transition hover:bg-secondary-50"
          >
            Quiero adoptar
          </a>
        }
      />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 sm:px-10 lg:px-16">
        <h2 className="mb-3 text-center text-3xl font-bold text-text-primary">
          Nuestros Perros
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
          Conoce a los peludos que buscan un hogar lleno de amor.
        </p>
        <DogGrid dogs={dogs} />
      </div>
      <AdoptionRules />
    </>
  );
}
