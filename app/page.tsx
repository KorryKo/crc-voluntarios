import DogGrid from "@/components/DogGrid";
import { dogs } from "@/data/dogs";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-primary">
          Nuestros Perros
        </h1>
        <p className="mt-2 text-text-secondary">
          Conocé a los perros que buscan un hogar. Adoptá, apadriná o compartí.
        </p>
        <div className="mt-8">
          <DogGrid dogs={dogs} />
        </div>
      </div>
    </div>
  );
}
