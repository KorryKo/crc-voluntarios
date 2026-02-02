import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Footprints, GamepadIcon, SprayCan, ShowerHead, Heart, MessageCircle, CalendarDays, GraduationCap, PartyPopper } from "lucide-react";

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
    icon: CalendarDays,
    title: "Elige tus días de capacitación",
    description:
      "La capacitación se realiza los martes, miércoles y jueves. Elige los días que mejor te acomoden.",
  },
  {
    icon: GraduationCap,
    title: "Completa la capacitación",
    description:
      "Durante aproximadamente una semana, aprenderás a pasear a los perros acompañado de uno de nuestros voluntarios.",
  },
  {
    icon: PartyPopper,
    title: "¡Ya eres voluntario!",
    description:
      "Una vez completada la capacitación, puedes venir cualquier día en horario de funcionamiento del refugio, a tu propio ritmo.",
  },
];

export default function Voluntariado() {
  return (
    <div className="bg-white">
      <HeroSection
        title="Voluntariado"
        subtitle="Únete a nuestro equipo de voluntarios y ayuda a transformar la vida de los perros del refugio."

        cta={
          <a
            href="https://wa.me/56987997244?text=Hola%2C%20me%20gustar%C3%ADa%20ser%20voluntario.%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20participar%3F"
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
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {activities.map((activity, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
                  <activity.icon className="h-7 w-7 text-secondary-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {activity.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
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
        <div className="mx-auto max-w-3xl rounded-full bg-secondary-500 px-12 py-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Requisitos
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90 leading-relaxed">
            Para ser voluntario solo necesitas ser mayor de 18 años y, lo más
            importante, tener amor por los perros y ganas de ayudar a mejorar
            su calidad de vida.
          </p>
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
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
                  <step.icon className="h-7 w-7 text-secondary-600" />
                </div>
                <p className="mt-2 text-sm font-semibold text-secondary-600">
                  Paso {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
