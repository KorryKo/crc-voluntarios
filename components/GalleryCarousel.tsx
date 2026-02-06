"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryCarouselProps {
  images: { src: string; alt: string }[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + images.length) % images.length);
    },
    [images.length]
  );

  const handlePrev = () => {
    setAutoPlay(false);
    goTo(current - 1);
  };

  const handleNext = () => {
    setAutoPlay(false);
    goTo(current + 1);
  };

  const openFullscreen = () => {
    setAutoPlay(false);
    setFullscreen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeFullscreen = () => {
    setVisible(false);
    setTimeout(() => setFullscreen(false), 300);
  };

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, images.length]);

  useEffect(() => {
    if (!fullscreen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
      if (e.key === "ArrowLeft") goTo(current - 1);
      if (e.key === "ArrowRight") goTo(current + 1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [fullscreen, current, goTo]);

  return (
    <>
      <div className="relative">
        <div className="cursor-pointer overflow-hidden rounded-2xl" onClick={openFullscreen}>
          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={1200}
            height={600}
            className="h-75 w-full object-contain transition-all duration-500 sm:h-100 lg:h-125"
            priority
          />
        </div>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/80 text-text-primary shadow-md backdrop-blur-sm transition hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Foto siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/80 text-text-primary shadow-md backdrop-blur-sm transition hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoPlay(false);
                  goTo(index);
                }}
                aria-label={`Ir a foto ${index + 1}`}
                className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-secondary-500"
                    : "w-2.5 bg-secondary-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeFullscreen}
        >
          <button
            onClick={closeFullscreen}
            aria-label="Cerrar"
            className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-7 w-7" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                aria-label="Foto anterior"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                aria-label="Foto siguiente"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <Image
            src={images[current].src}
            alt={images[current].alt}
            width={1920}
            height={1080}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
