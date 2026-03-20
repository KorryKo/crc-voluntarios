import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { Heart, Shield, Footprints, PawPrint } from "lucide-react";
import GalleryCarousel from "@/components/GalleryCarousel";
import { getVolunteerPhotos } from "@/lib/volunteers";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Somos un grupo de voluntarios que trabaja en el Centro de Rescate Canino de Ñuñoa para mejorar la calidad de vida de los perros abandonados y maltratados.",
  openGraph: {
    title: "Sobre Nosotros | Agrupación Voluntarios del rescate Canino ONG",
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
  name: "Sobre Nosotros - Agrupación Voluntarios del rescate Canino ONG",
  description:
    "Grupo de voluntarios dedicados al bienestar de perros en el Centro de Rescate Canino de Ñuñoa, Santiago, Chile.",
  url: "https://crc-voluntarios.cl/sobre-nosotros",
  isPartOf: {
    "@type": "WebSite",
    name: "Agrupación Voluntarios del rescate Canino ONG",
    url: "https://crc-voluntarios.cl",
  },
};

const queHacemos = [
  {
    icon: Footprints,
    title: "Paseos y compañía",
    description:
      "Les brindamos lo más cercano posible a la vida en familia: paseos, juegos y compañía diaria.",
  },
  {
    icon: Heart,
    title: "Rehabilitación",
    description:
      "Acompañamos a los canes en su recuperación de traumas, con paciencia y cariño.",
  },
  {
    icon: Shield,
    title: "Cuidados especiales",
    description:
      "Baños, medicamentos, consultas a especialistas, exámenes médicos, camas y ropa de invierno.",
  },
  {
    icon: PawPrint,
    title: "Salud física y mental",
    description:
      "El cuidado veterinario está en manos del centro, y nosotros les brindamos el bienestar emocional que necesitan.",
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
                alt="Logo Agrupación Voluntarios del rescate Canino ONG"
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
                  Agrupación Voluntarios del rescate Canino ONG nació hace más de 10 años, cuando un pequeño
                  grupo de personas decidió que no podía quedarse de brazos cruzados
                  ante la realidad de los perros abandonados y maltratados en
                  Santiago. Lo que comenzó como visitas esporádicas al Centro de
                  Rescate Canino de Ñuñoa se convirtió en un compromiso de vida.
                </p>
                <p>
                  Con el tiempo, el grupo fue creciendo. Más personas se sumaron,
                  motivadas por el mismo sentimiento: la convicción de que cada
                  perro merece una vida digna, incluso mientras espera encontrar un
                  hogar definitivo.
                </p>
                <p>
                  Hoy nuestra agrupación tiene un convenio de colaboración con la
                  Ilustre Municipalidad de Ñuñoa para trabajar en conjunto en el
                  Centro de Rescate Canino, ubicado en Vicuña Mackenna 1590. Desde
                  los inicios del centro, hemos estado cuidando y rehabilitando a
                  los canes que llegan producto de abandono y otras formas de
                  maltrato.
                </p>
                <p>
                  Nuestra función es cuidar, rehabilitar y acompañar con amor a los
                  canes hasta lograr su adopción en un buen hogar, que es nuestra
                  misión primordial.
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
            ¿Qué hacemos?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-text-secondary">
            Como todo ser sintiente y gregario, los canes necesitan salud física
            y mental en un entorno cuidado y respetuoso de su especie.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {queHacemos.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100">
                  <item.icon className="h-7 w-7 text-secondary-600" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {item.description}
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
          <h2 className="text-3xl font-bold text-white">Nuestra Misión</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90">
            Cuidar, rehabilitar y acompañar con amor a los canes hasta lograr
            su adopción en un buen hogar. Somos el puente entre los perros y
            las familias que les darán una nueva vida.
          </p>
        </div>
      </section>
    </div>
  );
}
