import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Heart, Shield, Users, PawPrint } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";
import { getVolunteerPhotos } from "@/lib/volunteers";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Somos un grupo de voluntarios que trabaja junto al refugio municipal de Santiago para mejorar la calidad de vida de los perros abandonados y maltratados.",
  openGraph: {
    title: "Sobre Nosotros | CRC Voluntarios",
    description:
      "Conoce nuestra historia de más de 10 años ayudando a perros abandonados en Santiago, Chile.",
    url: "/sobre-nosotros",
  },
  alternates: {
    canonical: "/sobre-nosotros",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sobre Nosotros - CRC Voluntarios",
  description:
    "Grupo de voluntarios dedicados al bienestar de perros en refugio municipal de Santiago, Chile.",
  url: "https://crc-voluntarios.cl/sobre-nosotros",
  isPartOf: {
    "@type": "WebSite",
    name: "CRC Voluntarios",
    url: "https://crc-voluntarios.cl",
  },
};

const values = [
  {
    icon: Heart,
    title: "Amor por los animales",
    description:
      "Todo lo que hacemos nace del cariño y respeto por los perros que cuidamos cada día.",
  },
  {
    icon: Shield,
    title: "Compromiso",
    description:
      "Llevamos más de 10 años dedicados a mejorar la vida de los perros del refugio, sin importar las dificultades.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Somos una familia de voluntarios unidos por un mismo propósito: darles una vida digna mientras encuentran un hogar.",
  },
  {
    icon: PawPrint,
    title: "Bienestar animal",
    description:
      "Nos enfocamos en que cada perro tenga una estadía lo más agradable posible: paseos, juegos, cariño y cuidado.",
  },
];

export default async function SobreNosotros() {
  const volunteerPhotos = await getVolunteerPhotos();
  const carouselImages = volunteerPhotos.map((photo) => ({
    src: photo.url,
    alt: photo.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
  }));

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection
        title="Sobre Nosotros"
        subtitle="Más de 10 años dedicados al bienestar de los perros del refugio."
        cta={
          <a
            href="https://wa.me/56987997244"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-secondary-700 shadow-xl transition hover:bg-secondary-50"
          >
            Comunícate con nosotros
          </a>
        }
      />

      {/* Nuestra historia */}
      <section className="pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:gap-16">
            <div className="shrink-0">
              <Image
                src="/logo-crc.png"
                alt="Logo CRC Voluntarios"
                width={280}
                height={280}
                className="rounded-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-primary">
                Nuestra Historia
              </h2>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
                <p>
                  CRC Voluntarios nació hace más de 10 años, cuando un pequeño
                  grupo de personas decidió que no podía quedarse de brazos cruzados
                  ante la realidad de los perros abandonados y maltratados en
                  Santiago. Lo que comenzó como visitas esporádicas al refugio
                  municipal se convirtió en un compromiso de vida.
                </p>
                <p>
                  Con el tiempo, el grupo fue creciendo. Más personas se sumaron,
                  motivadas por el mismo sentimiento: la convicción de que cada
                  perro merece una vida digna, incluso mientras espera encontrar un
                  hogar definitivo.
                </p>
                <p>
                  Hoy somos un grupo organizado de voluntarios que trabaja en
                  colaboración con el refugio municipal. No somos el refugio — somos
                  personas comunes que dedican su tiempo libre a hacer la diferencia.
                  El refugio es administrado por la municipalidad, que se encarga de
                  los rescates, la atención veterinaria y los procesos de adopción.
                  Nosotros nos enfocamos en lo que más necesitan los perros en su día
                  a día: compañía, ejercicio, higiene y cariño.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="bg-bg-warm py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h2 className="text-center text-3xl font-bold text-text-primary">
            ¿Qué nos mueve?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Nuestros valores guían cada acción que tomamos en el refugio.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
                  <value.icon className="h-7 w-7 text-secondary-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <h2 className="text-center text-3xl font-bold text-text-primary">
            Galería
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Algunos momentos junto a nuestros peludos.
          </p>
          <div className="mt-12">
            {carouselImages.length > 0 ? (
              <GalleryCarousel images={carouselImages} />
            ) : (
              <p className="text-center text-text-secondary">
                No hay fotos disponibles.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Nuestro rol */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl rounded-full bg-secondary-500 px-12 py-10 text-center">
          <h2 className="text-3xl font-bold text-white">Nuestro Rol</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Somos el puente entre los perros y las personas que quieren ayudar.
            Conectamos a posibles adoptantes con la administración del refugio y
            nos aseguramos de que cada perro reciba atención y cariño todos los
            días.
          </p>
        </div>
      </section>
    </div>
  );
}
