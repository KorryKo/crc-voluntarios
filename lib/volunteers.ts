import { supabase } from "./supabase";

export interface VolunteerPhoto {
  name: string;
  url: string;
}

export async function getVolunteerPhotos(): Promise<VolunteerPhoto[]> {
  const { data, error } = await supabase.storage
    .from("volunteer-photos")
    .list("", { sortBy: { column: "name", order: "asc" } });

  if (error) {
    console.error("Error fetching volunteer photos:", error.message);
    return [];
  }

  return data
    .filter((file) => !file.name.startsWith("."))
    .map((file) => ({
      name: file.name,
      url: supabase.storage.from("volunteer-photos").getPublicUrl(file.name).data.publicUrl,
    }));
}
