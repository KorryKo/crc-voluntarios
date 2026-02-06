import DogForm from "../DogForm";

export default function NuevoPerroPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-(--color-text-primary)">
        Agregar perro
      </h1>
      <div className="mt-6">
        <DogForm />
      </div>
    </div>
  );
}
