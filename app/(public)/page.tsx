import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import DogsSection from "@/components/DogsSection";
import AdoptionRules from "@/components/AdoptionRules";
import DonationSection from "@/components/DonationSection";
import { getDogs } from "@/lib/dogs";
import { ORG_NAME, SITE_URL, INSTAGRAM_URL, OG_DEFAULTS } from "@/lib/constants";

export const revalidate = 0;

const PAGE_TITLE = "Adoptar un Perro en Santiago | Centro de Rescate Canino de Ñuñoa";

export const metadata: Metadata = {
  // `absolute` opts out of the root layout's `%s | ${ORG_NAME}` template, which
  // would otherwise append the org name a second time.
  title: { absolute: PAGE_TITLE },
  description:
    "Conoce a los perros disponibles para adopción en nuestro refugio en Santiago, Chile. Encuentra a tu nuevo compañero y dale un hogar.",
  openGraph: {
    ...OG_DEFAULTS,
    title: PAGE_TITLE,
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
  name: ORG_NAME,
  description:
    "Grupo de voluntarios dedicados al rescate y adopción de perros en Santiago, Chile.",
  url: SITE_URL,
  sameAs: [INSTAGRAM_URL],
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
        title="Adopta un perro en el Centro de Rescate Canino de Ñuñoa"
        subtitle="Somos voluntarios que trabajamos en el Centro de Rescate Canino de Ñuñoa cuidando perros abandonados. Conócelos y cambia una vida — la de ellos y la tuya."
        cta={
          <a
            href="#como-adoptar"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-secondary-700 shadow-xl transition hover:bg-secondary-50"
          >
            Quiero adoptar
          </a>
        }
      />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <h2 className="mb-3 text-center text-3xl font-bold text-text-primary">
          Nuestros Perros
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-text-secondary">
          Conoce a los peludos que buscan un hogar lleno de amor.
        </p>
        <DogsSection dogs={dogs} />
      </div>
      <AdoptionRules />
      <DonationSection />
    </>
  );
}
