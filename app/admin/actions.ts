"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";

export async function createDog(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const foto = formData.get("foto") as File | null;
  let fotoPath = "";

  if (foto && foto.size > 0) {
    fotoPath = await uploadDogPhoto(foto);
  }

  const { error } = await supabase.from("dogs").insert({
    nombre: formData.get("nombre") as string,
    fecha_nacimiento: formData.get("fecha_nacimiento") as string,
    sexo: formData.get("sexo") as string,
    tamano: formData.get("tamano") as string,
    descripcion: formData.get("descripcion") as string,
    estado: formData.get("estado") as string,
    foto: fotoPath,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/admin/perros");
  revalidatePath("/");
}

export async function updateDog(id: number, formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const foto = formData.get("foto") as File | null;
  const existingFoto = formData.get("existing_foto") as string;

  let fotoPath = existingFoto;

  if (foto && foto.size > 0) {
    // Delete old photo if it exists
    if (existingFoto) {
      await deleteDogPhoto(existingFoto);
    }
    fotoPath = await uploadDogPhoto(foto);
  }

  const { error } = await supabase
    .from("dogs")
    .update({
      nombre: formData.get("nombre") as string,
      fecha_nacimiento: formData.get("fecha_nacimiento") as string,
      sexo: formData.get("sexo") as string,
      tamano: formData.get("tamano") as string,
      descripcion: formData.get("descripcion") as string,
      estado: formData.get("estado") as string,
      foto: fotoPath,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/perros");
  revalidatePath("/");
}

export async function deleteDog(id: number) {
  await requireAdmin();
  const supabase = await createClient();

  // Get the dog's photo path before deleting
  const { data: dog } = await supabase
    .from("dogs")
    .select("foto")
    .eq("id", id)
    .single();

  if (dog?.foto) {
    await deleteDogPhoto(dog.foto);
  }

  const { error } = await supabase.from("dogs").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/perros");
  revalidatePath("/");
}

async function uploadDogPhoto(file: File): Promise<string> {
  const supabase = await createClient();

  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from("dog-photos")
    .upload(fileName, file);

  if (error) throw new Error(error.message);

  return fileName;
}

async function deleteDogPhoto(path: string) {
  const supabase = await createClient();

  await supabase.storage.from("dog-photos").remove([path]);
}

export async function uploadVolunteerPhoto(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  const file = formData.get("foto") as File;
  if (!file || file.size === 0) throw new Error("No se seleccionó archivo");

  const ext = file.name.split(".").pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error } = await supabase.storage
    .from("volunteer-photos")
    .upload(fileName, file);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/fotos");
  revalidatePath("/sobre-nosotros");
}

export async function deleteVolunteerPhoto(path: string) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase.storage
    .from("volunteer-photos")
    .remove([path]);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/fotos");
  revalidatePath("/sobre-nosotros");
}
