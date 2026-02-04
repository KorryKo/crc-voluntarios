import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  badge?: string;
  cta?: ReactNode;
}

export default function HeroSection({
  title,
  subtitle,
  badge,
  cta,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-linear-to-br from-secondary-500 via-secondary-400 to-secondary-300">
      {/* Decorative blob shapes */}
      <div className="absolute -right-[8%] -top-[15%] h-112.5 w-112.5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-white/12 animate-[blob_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-[25%] -left-[12%] h-100 w-100 rounded-[30%_60%_70%_40%/50%_60%_30%_60%] bg-white/8 animate-[blob_10s_ease-in-out_infinite_reverse]" />

      {/* Floating elements */}
      <div className="absolute left-[8%] top-[22%] text-5xl opacity-70 animate-[float_6s_ease-in-out_infinite] drop-shadow-md lg:text-7xl">
        🦴
      </div>
      <div className="absolute bottom-[28%] right-[10%] text-4xl opacity-60 animate-[float_5s_ease-in-out_infinite_0.5s] drop-shadow-md lg:text-6xl">
        🐾
      </div>
      <div className="absolute left-[15%] top-[70%] sm:top-[55%] text-3xl opacity-50 animate-[float_7s_ease-in-out_infinite_1s] lg:text-5xl">
        ❤️
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-32 pt-28 text-center sm:px-10 lg:px-16">
        {badge && (
          <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/25 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm">
            🏠 {badge}
          </span>
        )}

        <h1 className="text-[clamp(40px,8vw,68px)] font-bold leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
          {title}
        </h1>

        <p className="mx-auto mb-9 mt-6 max-w-137.5 text-[clamp(17px,2.2vw,20px)] leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.1)]">
          {subtitle}
        </p>

        {cta && <div className="flex flex-wrap justify-center gap-4">{cta}</div>}
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 h-15 w-full sm:h-20 md:h-25"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C480,60 960,0 1440,40 L1440,60 L0,60 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}
