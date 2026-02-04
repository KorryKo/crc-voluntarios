import Image from "next/image";
import { Mars, Venus, Ruler, LucideIcon } from "lucide-react";
import { Dog, EstadoPerro, Sexo, Tamaño } from "@/types";
import { calcularEdad } from "@/lib/utils";

const estadoConfig: Record<
  EstadoPerro,
  { label: string; bg: string; text: string }
> = {
  disponible: {
    label: "Disponible",
    bg: "bg-green-100",
    text: "text-green-800",
  },
  adoptado: {
    label: "Adoptado",
    bg: "bg-accent-100",
    text: "text-accent-700",
  },
};

const sexoConfig: Record<Sexo, { icon: LucideIcon; label: string; color: string }> =
  {
    macho: { icon: Mars, label: "Macho", color: "text-accent-600" },
    hembra: { icon: Venus, label: "Hembra", color: "text-pink-500" },
  };

const tamañoLabels: Record<Tamaño, string> = {
  pequeño: "Pequeño",
  mediano: "Mediano",
  grande: "Grande",
};

export default function DogCard({ dog }: { dog: Dog }) {
  const estado = estadoConfig[dog.estado];
  const sexo = sexoConfig[dog.sexo];
  const SexoIcon = sexo.icon;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary-300 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-3/4">
        <Image
          src={dog.foto}
          alt={`Foto de ${dog.nombre}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${estado.bg} ${estado.text}`}
        >
          {estado.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-text-primary">{dog.nombre}</h2>
          <span className={`flex items-center gap-1 text-sm ${sexo.color}`}>
            <SexoIcon size={16} />
            {sexo.label}
          </span>
        </div>
        <p className="mt-1 flex items-center gap-3 text-sm text-text-secondary">
          <span>{calcularEdad(dog.fechaNacimiento)}</span>
          <span className="flex items-center gap-1">
            <Ruler size={14} />
            {tamañoLabels[dog.tamaño]}
          </span>
        </p>
        <p className="mt-2 text-sm text-text-secondary">
          {dog.descripcion}
        </p>
        <div className="mt-auto pt-4">
          <a
            href={`https://wa.me/56987997244?text=${encodeURIComponent(`Hola! Vi a ${dog.nombre} en la página de CRC Voluntarios y me gustaría saber más sobre este perrito para una posible adopción.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full border-2 border-secondary-500 py-2 text-center text-sm font-semibold text-secondary-500 transition hover:bg-secondary-500 hover:text-white"
          >
            Preguntar por {dog.nombre}
          </a>
        </div>
      </div>
    </article>
  );
}
