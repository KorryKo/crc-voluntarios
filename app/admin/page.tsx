import { getDogs } from "@/lib/dogs";
import { Dog } from "lucide-react";
import Link from "next/link";

export const revalidate = 0;

export default async function AdminDashboard() {
  const dogs = await getDogs();

  const total = dogs.length;
  const disponibles = dogs.filter((d) => d.estado === "disponible").length;
  const adoptados = dogs.filter((d) => d.estado === "adoptado").length;

  const stats = [
    { label: "Total de perros", value: total },
    { label: "Disponibles", value: disponibles },
    { label: "Adoptados", value: adoptados },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-(--color-text-primary)">
        Dashboard
      </h1>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {stats.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-gray-200 bg-white p-5"
          >
            <p className="text-sm text-(--color-text-secondary)">{label}</p>
            <p className="mt-1 text-3xl font-bold text-(--color-text-primary)">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-(--color-text-primary)">
          Accesos rápidos
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/admin/perros"
            className="inline-flex items-center gap-2 rounded-lg bg-(--color-secondary-500) px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-(--color-secondary-600)"
          >
            <Dog size={16} />
            Ver perros
          </Link>
          <Link
            href="/admin/perros/nuevo"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--color-text-primary) transition-colors hover:bg-gray-50"
          >
            Agregar perro
          </Link>
          <Link
            href="/admin/fotos"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-(--color-text-primary) transition-colors hover:bg-gray-50"
          >
            Gestionar fotos
          </Link>
        </div>
      </div>
    </div>
  );
}
