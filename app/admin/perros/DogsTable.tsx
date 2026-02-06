"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { deleteDog } from "@/app/admin/actions";
import type { Dog } from "@/types";

function formatDate(date: Date) {
  return date.toLocaleDateString("es-CL", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function DogsTable({ dogs }: { dogs: Dog[] }) {
  const [deleting, setDeleting] = useState<number | null>(null);
  const [confirm, setConfirm] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    setDeleting(id);
    try {
      await deleteDog(id);
    } catch (e) {
      alert(e instanceof Error ? e.message : "Error al eliminar");
    } finally {
      setDeleting(null);
      setConfirm(null);
    }
  };

  if (dogs.length === 0) {
    return (
      <p className="mt-8 text-center text-(--color-text-secondary)">
        No hay perros registrados.
      </p>
    );
  }

  return (
    <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-(--color-text-secondary)">
            <th className="px-4 py-3 font-medium">Nombre</th>
            <th className="px-4 py-3 font-medium">Estado</th>
            <th className="hidden px-4 py-3 font-medium sm:table-cell">
              Sexo
            </th>
            <th className="hidden px-4 py-3 font-medium md:table-cell">
              Tamaño
            </th>
            <th className="hidden px-4 py-3 font-medium lg:table-cell">
              Nacimiento
            </th>
            <th className="px-4 py-3 font-medium">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {dogs.map((dog) => (
            <tr
              key={dog.id}
              className="border-b border-gray-100 last:border-0"
            >
              <td className="px-4 py-3 font-medium text-(--color-text-primary)">
                {dog.nombre}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    dog.estado === "disponible"
                      ? "bg-green-50 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {dog.estado}
                </span>
              </td>
              <td className="hidden px-4 py-3 text-(--color-text-secondary) sm:table-cell">
                {dog.sexo}
              </td>
              <td className="hidden px-4 py-3 text-(--color-text-secondary) md:table-cell">
                {dog.tamaño}
              </td>
              <td className="hidden px-4 py-3 text-(--color-text-secondary) lg:table-cell">
                {formatDate(dog.fechaNacimiento)}
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/admin/perros/${dog.id}/editar`}
                    className="rounded-lg p-1.5 text-(--color-text-secondary) transition-colors hover:bg-gray-100 hover:text-(--color-text-primary)"
                  >
                    <Pencil size={16} />
                  </Link>

                  {confirm === dog.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(dog.id)}
                        disabled={deleting === dog.id}
                        className="rounded-lg px-2 py-1 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                      >
                        {deleting === dog.id ? "..." : "Confirmar"}
                      </button>
                      <button
                        onClick={() => setConfirm(null)}
                        className="rounded-lg px-2 py-1 text-xs text-(--color-text-secondary) transition-colors hover:bg-gray-100"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirm(dog.id)}
                      className="rounded-lg p-1.5 text-(--color-text-secondary) transition-colors hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
