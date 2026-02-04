"use client";

import { useState } from "react";
import { Dog, EstadoPerro } from "@/types";
import DogGrid from "./DogGrid";

export default function DogsSection({ dogs }: { dogs: Dog[] }) {
  const [filter, setFilter] = useState<EstadoPerro>("disponible");

  const filteredDogs = dogs.filter((dog) => dog.estado === filter);

  return (
    <div>
      <div className="mb-8 flex justify-center">
        <div className="relative inline-flex rounded-full bg-gray-100 p-1">
          <div
            className="absolute top-1 bottom-1 rounded-full bg-secondary-500 transition-all duration-300 ease-in-out"
            style={{
              width: "calc(50% - 4px)",
              left: filter === "disponible" ? "4px" : "calc(50% + 0px)",
            }}
          />
          <button
            onClick={() => setFilter("disponible")}
            className={`relative z-10 rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 ${
              filter === "disponible" ? "text-white" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Disponibles
          </button>
          <button
            onClick={() => setFilter("adoptado")}
            className={`relative z-10 rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 ${
              filter === "adoptado" ? "text-white" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            Adoptados
          </button>
        </div>
      </div>
      {filteredDogs.length > 0 ? (
        <DogGrid dogs={filteredDogs} />
      ) : (
        <p className="text-center text-text-secondary">
          No hay perros {filter === "disponible" ? "disponibles" : "adoptados"} en este momento.
        </p>
      )}
    </div>
  );
}
