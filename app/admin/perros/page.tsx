import { getDogs } from "@/lib/dogs";
import Link from "next/link";
import { Plus } from "lucide-react";
import DogsTable from "./DogsTable";

export const revalidate = 0;

export default async function AdminPerrosPage() {
  const dogs = await getDogs();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-(--color-text-primary)">
          Perros
        </h1>
        <Link
          href="/admin/perros/nuevo"
          className="inline-flex items-center gap-2 rounded-lg bg-(--color-secondary-500) px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-(--color-secondary-600)"
        >
          <Plus size={16} />
          Agregar perro
        </Link>
      </div>

      <DogsTable dogs={dogs} />
    </div>
  );
}
