import { getVolunteerPhotos } from "@/lib/volunteers";
import PhotoGallery from "./PhotoGallery";

export const revalidate = 0;

export default async function AdminFotosPage() {
  const photos = await getVolunteerPhotos();

  return (
    <div>
      <h1 className="text-2xl font-bold text-(--color-text-primary)">
        Fotos de voluntarios
      </h1>
      <PhotoGallery photos={photos} />
    </div>
  );
}
