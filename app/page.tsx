import HeroSection from "@/components/HeroSection";
import DogGrid from "@/components/DogGrid";
import { dogs } from "@/data/dogs";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Nuestros Perros"
        subtitle="Conocé a los perros que buscan un hogar. Adoptá, vení a visitarnos o compartí."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DogGrid dogs={dogs} />
      </div>
    </>
  );
}
