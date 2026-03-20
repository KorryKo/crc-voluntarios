import {
  ShieldCheck,
  PawPrint,
  Video,
  House,
  FileSignature,
  Heart,
} from "lucide-react";
import InfoCard from "@/components/InfoCard";
import StepsGrid from "@/components/StepsGrid";

const requirements = [
  "Ser mayor de edad.",
  "Si eres extranjero, se requiere residencia definitiva.",
  "Poseer un lugar adecuado — casa o departamento — que permita la vida familiar con el can.",
  "Si es departamento, tener rejilla anti caída en balcones.",
  "Si es casa, contar con rejas o protecciones que eviten peleas con otros canes y posibles escapes.",
];

const steps = [
  {
    icon: PawPrint,
    title: "Conoce al can",
    description:
      "Visita el Centro de Rescate Canino e interactúa con el perro. Es importante que ambas partes — humanos y can — se acepten.",
  },
  {
    icon: Video,
    title: "Video del hogar",
    description:
      "Envía un video mostrando el lugar donde estará el can, la protección contra lluvia o calor, y el espacio en general.",
  },
  {
    icon: House,
    title: "Visita con el can",
    description:
      "Luego de ser aprobado por el director del centro, se realiza una visita con el can para ver su adaptación al nuevo entorno.",
  },
  {
    icon: FileSignature,
    title: "Firma de contrato",
    description:
      "Si todo está correcto, el can es adoptado con firma de contrato.",
  },
  {
    icon: Heart,
    title: "Seguimiento y apoyo",
    description:
      "Hacemos seguimiento y brindamos apoyo por el tiempo necesario para asegurar una adopción exitosa.",
  },
];

export default function AdoptionRules() {
  return (
    <section className="bg-bg-warm py-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-3xl font-bold text-text-primary">
          ¿Cómo adoptar?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
          Sigue estos pasos para darle un hogar a uno de nuestros perros.
        </p>

        {/* Requisitos */}
        <InfoCard className="mt-12">
          <h3 className="flex items-center gap-2 text-xl font-bold text-text-primary">
            <ShieldCheck className="h-6 w-6 text-secondary-500" />
            Requisitos para adoptar
          </h3>
          <ul className="mt-4 space-y-3">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-text-secondary">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary-100 text-xs font-bold text-secondary-600">
                  {index + 1}
                </span>
                {req}
              </li>
            ))}
          </ul>
        </InfoCard>

        {/* Pasos */}
        <StepsGrid steps={steps} columns={5} />
      </div>
    </section>
  );
}
