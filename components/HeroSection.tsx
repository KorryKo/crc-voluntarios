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
    <section className="relative flex min-h-[75vh] items-center overflow-hidden bg-gradient-to-br from-secondary-500 via-secondary-400 to-secondary-300">
      {/* Decorative blob shapes */}
      <div className="absolute -right-[8%] -top-[15%] h-[450px] w-[450px] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-white/12 animate-[blob_8s_ease-in-out_infinite]" />
      <div className="absolute -bottom-[25%] -left-[12%] h-[400px] w-[400px] rounded-[30%_60%_70%_40%/50%_60%_30%_60%] bg-white/8 animate-[blob_10s_ease-in-out_infinite_reverse]" />

      {/* Floating elements */}
      <div className="absolute left-[8%] top-[22%] text-5xl opacity-70 animate-[float_6s_ease-in-out_infinite] drop-shadow-md">
        🦴
      </div>
      <div className="absolute bottom-[28%] right-[10%] text-4xl opacity-60 animate-[float_5s_ease-in-out_infinite_0.5s] drop-shadow-md">
        🐾
      </div>
      <div className="absolute left-[15%] top-[55%] text-3xl opacity-50 animate-[float_7s_ease-in-out_infinite_1s]">
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

        <p className="mx-auto mb-9 mt-6 max-w-[550px] text-[clamp(17px,2.2vw,20px)] leading-relaxed text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.1)]">
          {subtitle}
        </p>

        {cta && <div className="flex flex-wrap justify-center gap-4">{cta}</div>}
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 h-[100px] w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}
