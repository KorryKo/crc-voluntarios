import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta?: ReactNode;
}

export default function HeroSection({ title, subtitle, cta }: HeroSectionProps) {
  return (
    <section
      className="py-16 sm:py-20"
      style={{
        background:
          "linear-gradient(to right, white, var(--color-secondary-500) 40%, var(--color-secondary-500) 60%, white)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          {subtitle}
        </p>
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  );
}
