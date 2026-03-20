import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Footprints, GamepadIcon, SprayCan, ShowerHead, Heart, MessageCircle, ClipboardList, GraduationCap, PartyPopper, UserCheck, Clock, Users, HandHeart, ShieldCheck } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import StepsGrid from "@/components/StepsGrid";
import { ORG_NAME, SITE_URL, getWhatsAppUrl, WA_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Voluntariado",
  description:
    "Únete como voluntario en nuestro refugio de perros en Santiago, Chile. Pasea perros, ayuda en su cuidado y forma parte de nuestro equipo.",
  openGraph: {
    title: `Voluntariado | ${ORG_NAME}`,
    description:
      "Únete como voluntario en nuestro refugio de perros en Santiago, Chile. Solo necesitas ser mayor de 18 años y amar a los perros.",
    url: "/voluntariado",
  },
  alternates: {
    canonical: "/voluntariado",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `Voluntariado - ${ORG_NAME}`,
  description:
    "Programa de voluntariado para el cuidado de perros en el Centro de Rescate Canino de Ñuñoa, Santiago, Chile.",
  url: `${SITE_URL}/voluntariado`,
  isPartOf: {
    "@type": "WebSite",
    name: ORG_NAME,
    url: SITE_URL,
  },
  about: {
    "@type": "VolunteerAction",
    name: `Voluntariado ${ORG_NAME}`,
    description:
      "Actividades de voluntariado incluyen paseos, juegos, limpieza y baño de perros en el refugio.",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
    },
  },
};

const activities = [
  {
    icon: Footprints,
    title: "Paseos",
    description:
      "Sacamos a los perros a caminar para que puedan explorar, olfatear y disfrutar del aire libre.",
  },
  {
    icon: GamepadIcon,
    title: "Juegos en el patio",
    description:
      "Jugamos con los perros en nuestro patio para que se ejerciten y socialicen.",
  },
  {
    icon: SprayCan,
    title: "Limpieza del área",
    description:
      "Mantenemos limpios los espacios del refugio para asegurar un entorno saludable.",
  },
  {
    icon: ShowerHead,
    title: "Baño de los perros",
    description:
      "Lavamos y aseamos a los perros para mantener su higiene y bienestar.",
  },
  {
    icon: Heart,
    title: "Bienestar general",
    description:
      "Nos aseguramos de que cada perro reciba el cuidado, cariño y atención que necesita.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "Contáctanos",
    description:
      "Escríbenos por WhatsApp para contarnos que te interesa ser voluntario.",
  },
  {
    icon: ClipboardList,
    title: "Proceso de inducción",
    description:
      "Te presentamos a cada can, sus necesidades, miedos, gustos, preferencias de paseo, carácter y cuidados especiales.",
  },
  {
    icon: GraduationCap,
    title: "Completa las asistencias",
    description:
      "Normalmente son 4 o 5 asistencias de inducción, acompañado de nuestros voluntarios experimentados.",
  },
  {
    icon: PartyPopper,
    title: "¡Ya eres voluntario!",
    description:
      "Firmas como voluntario y puedes venir eligiendo tu propio horario.",
  },
];

export default function Voluntariado() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection
        title="Voluntariado"
        subtitle="Únete a nuestro equipo de voluntarios y ayuda a transformar la vida de los perros del refugio."

        cta={
          <a
            href={getWhatsAppUrl(WA_MESSAGES.volunteer)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-secondary-700 shadow-xl transition hover:bg-secondary-50"
          >
            Quiero ser voluntario
          </a>
        }
      />

      <section className="bg-bg-warm pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h2 className="text-center text-3xl font-bold text-text-primary">
            ¿Qué hacemos como voluntarios?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Nuestras actividades diarias están enfocadas en el bienestar de los
            perros del refugio.
          </p>
          <StepsGrid steps={activities} columns={5} numbered={false} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/voluntarios.jpg"
            alt="Equipo de voluntarios del refugio"
            width={1200}
            height={600}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <h2 className="text-center text-3xl font-bold text-text-primary">
            Requisitos
          </h2>
          <InfoCard className="mt-10">
            <ul className="space-y-4">
              {[
                { icon: UserCheck, text: "Ser mayor de edad." },
                { icon: Clock, text: "Tiempo mínimo de dos horas a la semana para estar con ellos." },
                { icon: Users, text: "Disposición de aprender y trabajar en grupo." },
                { icon: HandHeart, text: "Respeto y cariño hacia toda especie, como a un igual." },
                { icon: ShieldCheck, text: "Responsabilidad para cumplir el compromiso voluntario de asistir." },
              ].map((req, index) => (
                <li key={index} className="flex items-start gap-3 text-text-secondary">
                  <req.icon className="mt-0.5 h-5 w-5 shrink-0 text-secondary-500" />
                  <span className="text-sm">{req.text}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>

      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h2 className="text-center text-3xl font-bold text-text-primary">
            ¿Cómo ser voluntario?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Sigue estos pasos para unirte a nuestro equipo.
          </p>
          <StepsGrid steps={steps} columns={4} />
        </div>
      </section>
    </div>
  );
}
