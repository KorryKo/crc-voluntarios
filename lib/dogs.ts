import { supabase } from "./supabase";
import { Dog } from "@/types";

export async function getDogs(): Promise<Dog[]> {
  const { data, error } = await supabase
    .from("dogs")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching dogs:", error.message);
    return [];
  }

  return data.map((dog) => {
    const foto = dog.foto
      ? supabase.storage.from("dog-photos").getPublicUrl(dog.foto).data.publicUrl
      : "";

    return {
      id: dog.id,
      nombre: dog.nombre,
      edad: dog.edad,
      sexo: dog.sexo,
      tamaño: dog.tamano,
      foto,
      descripcion: dog.descripcion,
      estado: dog.estado,
    };
  });
}
