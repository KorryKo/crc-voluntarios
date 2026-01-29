import Image from "next/image";
import { Mars, Venus, Ruler, LucideIcon } from "lucide-react";
import { Dog, EstadoPerro, Sexo, Tamaño } from "@/types";

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
  "en proceso": {
    label: "En proceso",
    bg: "bg-secondary-100",
    text: "text-secondary-800",
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
    <article className="overflow-hidden rounded-2xl border border-primary-300 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-square">
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
      <div className="p-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-text-primary">{dog.nombre}</h2>
          <span className={`flex items-center gap-1 text-sm ${sexo.color}`}>
            <SexoIcon size={16} />
            {sexo.label}
          </span>
        </div>
        <p className="mt-1 flex items-center gap-3 text-sm text-text-secondary">
          <span>{dog.edad}</span>
          <span className="flex items-center gap-1">
            <Ruler size={14} />
            {tamañoLabels[dog.tamaño]}
          </span>
        </p>
        <p className="mt-2 text-sm text-text-secondary line-clamp-3">
          {dog.descripcion}
        </p>
      </div>
    </article>
  );
}
