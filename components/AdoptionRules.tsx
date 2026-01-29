import { PawPrint, Video, Stethoscope, House, Heart } from "lucide-react";

const steps = [
  {
    icon: PawPrint,
    title: "Visita el refugio",
    description:
      "Acércate al refugio para conocer al perro en persona. Es importante que se genere una conexión entre tú y tu futuro compañero.",
  },
  {
    icon: Video,
    title: "Envíanos un video de tu hogar",
    description:
      "Graba un video mostrando el espacio donde vivirá el perro. Esto nos ayuda a asegurar que el entorno sea adecuado para sus necesidades.",
  },
  {
    icon: Stethoscope,
    title: "Evaluación veterinaria",
    description:
      "Nuestro veterinario revisará la información y evaluará si el hogar cumple con las necesidades específicas del perro.",
  },
  {
    icon: House,
    title: "Visita al hogar",
    description:
      "Personal del refugio irá a tu hogar junto con el perro para conocer el espacio y ver cómo se adapta al entorno.",
  },
  {
    icon: Heart,
    title: "¡Ya eres familia perruna!",
    description:
      "Si todo está en orden, ¡felicitaciones! Ya puedes llevarte a tu nuevo compañero a casa.",
  },
];

export default function AdoptionRules() {
  return (
    <section className="bg-bg-warm py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-text-primary">
          ¿Cómo adoptar?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
          Sigue estos pasos para darle un hogar a uno de nuestros perros.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
  );
}
