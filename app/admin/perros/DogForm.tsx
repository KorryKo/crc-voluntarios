"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mars, Venus, Ruler } from "lucide-react";
import { createDog, updateDog } from "@/app/admin/actions";
import { calcularEdad } from "@/lib/utils";
import type { Dog, EstadoPerro, Sexo, Tamaño } from "@/types";

const estadoConfig: Record<EstadoPerro, { label: string; bg: string; text: string }> = {
  disponible: { label: "Disponible", bg: "bg-green-100", text: "text-green-800" },
  adoptado: { label: "Adoptado", bg: "bg-accent-100", text: "text-accent-700" },
};

const sexoConfig: Record<Sexo, { icon: typeof Mars; label: string; color: string }> = {
  macho: { icon: Mars, label: "Macho", color: "text-accent-600" },
  hembra: { icon: Venus, label: "Hembra", color: "text-pink-500" },
};

const tamañoLabels: Record<Tamaño, string> = {
  pequeño: "Pequeño",
  mediano: "Mediano",
  grande: "Grande",
};

export default function DogForm({ dog }: { dog?: Dog }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [nombre, setNombre] = useState(dog?.nombre ?? "");
  const [fechaNacimiento, setFechaNacimiento] = useState(
    dog ? dog.fechaNacimiento.toISOString().split("T")[0] : ""
  );
  const [sexo, setSexo] = useState<Sexo | "">(dog?.sexo ?? "");
  const [tamano, setTamano] = useState<Tamaño | "">(dog?.tamaño ?? "");
  const [estado, setEstado] = useState<EstadoPerro>(dog?.estado ?? "disponible");
  const [descripcion, setDescripcion] = useState(dog?.descripcion ?? "");
  const [preview, setPreview] = useState<string | null>(dog?.foto || null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      if (dog) {
        await updateDog(dog.id, formData);
      } else {
        await createDog(formData);
      }
      router.push("/admin/perros");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
      setSubmitting(false);
    }
  };

  // Preview data
  const previewSexo = sexo || "macho";
  const previewTamano = tamano || "mediano";
  const previewEstado = estado;
  const previewEdad = fechaNacimiento
    ? calcularEdad(new Date(fechaNacimiento))
    : "";
  const SexoIcon = sexoConfig[previewSexo].icon;
  const estadoCfg = estadoConfig[previewEstado];
  const sexoCfg = sexoConfig[previewSexo];

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5">
        {error && (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
            Nombre
          </label>
          <input
            name="nombre"
            type="text"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-(--color-secondary-500) focus:ring-1 focus:ring-(--color-secondary-500)"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
            Fecha de nacimiento
          </label>
          <input
            name="fecha_nacimiento"
            type="date"
            required
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-(--color-secondary-500) focus:ring-1 focus:ring-(--color-secondary-500)"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
              Sexo
            </label>
            <select
              name="sexo"
              required
              value={sexo}
              onChange={(e) => setSexo(e.target.value as Sexo)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-(--color-secondary-500) focus:ring-1 focus:ring-(--color-secondary-500)"
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="macho">Macho</option>
              <option value="hembra">Hembra</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
              Tamaño
            </label>
            <select
              name="tamano"
              required
              value={tamano}
              onChange={(e) => setTamano(e.target.value as Tamaño)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-(--color-secondary-500) focus:ring-1 focus:ring-(--color-secondary-500)"
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="pequeño">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
            Estado
          </label>
          <select
            name="estado"
            required
            value={estado}
            onChange={(e) => setEstado(e.target.value as EstadoPerro)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-(--color-secondary-500) focus:ring-1 focus:ring-(--color-secondary-500)"
          >
            <option value="disponible">Disponible</option>
            <option value="adoptado">Adoptado</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
            Descripción
          </label>
          <textarea
            name="descripcion"
            rows={4}
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-(--color-secondary-500) focus:ring-1 focus:ring-(--color-secondary-500)"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-(--color-text-primary)">
            Foto
          </label>
          <input
            ref={fileRef}
            name="foto"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-(--color-text-secondary) file:mr-3 file:rounded-lg file:border-0 file:bg-gray-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-(--color-text-primary) hover:file:bg-gray-200"
          />
          {dog && <input type="hidden" name="existing_foto" value={dog.fotoPath} />}
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-(--color-secondary-500) px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-(--color-secondary-600) disabled:opacity-50"
          >
            {submitting ? "Guardando..." : dog ? "Guardar cambios" : "Crear perro"}
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin/perros")}
            className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-(--color-text-primary) transition-colors hover:bg-gray-50"
          >
            Cancelar
          </button>
        </div>
      </form>

      {/* Live card preview */}
      <div className="w-full max-w-xs shrink-0">
        <p className="mb-3 text-sm font-medium text-(--color-text-secondary)">
          Vista previa
        </p>
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-primary-300 bg-white shadow-sm">
          <div className="relative aspect-3/4 bg-gray-100">
            {preview ? (
              <Image
                src={preview}
                alt={`Foto de ${nombre || "perro"}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-sm text-(--color-text-muted)">
                Sin foto
              </div>
            )}
            <span
              className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${estadoCfg.bg} ${estadoCfg.text}`}
            >
              {estadoCfg.label}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-8">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-text-primary">
                {nombre || "Nombre"}
              </h2>
              {sexo && (
                <span className={`flex items-center gap-1 text-sm ${sexoCfg.color}`}>
                  <SexoIcon size={16} />
                  {sexoCfg.label}
                </span>
              )}
            </div>
            <p className="mt-1 flex items-center gap-3 text-sm text-text-secondary">
              {previewEdad && <span>{previewEdad}</span>}
              {tamano && (
                <span className="flex items-center gap-1">
                  <Ruler size={14} />
                  {tamañoLabels[previewTamano]}
                </span>
              )}
            </p>
            {descripcion && (
              <p className="mt-2 text-sm text-text-secondary">{descripcion}</p>
            )}
            <div className="mt-auto pt-4">
              <span className="block w-full rounded-full border-2 border-secondary-500 py-2 text-center text-sm font-semibold text-secondary-500">
                Preguntar por {nombre || "..."}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
