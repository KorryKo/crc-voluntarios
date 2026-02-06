import { notFound } from "next/navigation";
import { getDogs } from "@/lib/dogs";
import DogForm from "../../DogForm";

export const revalidate = 0;

export default async function EditarPerroPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const dogs = await getDogs();
  const dog = dogs.find((d) => d.id === Number(id));

  if (!dog) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-(--color-text-primary)">
        Editar: {dog.nombre}
      </h1>
      <div className="mt-6">
        <DogForm dog={dog} />
      </div>
    </div>
  );
}
