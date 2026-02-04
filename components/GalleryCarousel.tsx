"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  images: { src: string; alt: string }[];
}

export default function GalleryCarousel({ images }: GalleryCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
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

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, images.length]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          width={1200}
          height={600}
          className="h-[300px] w-full object-contain transition-all duration-500 sm:h-[400px] lg:h-[500px]"
          priority
        />
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-text-primary shadow-md backdrop-blur-sm transition hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Foto siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-text-primary shadow-md backdrop-blur-sm transition hover:bg-white"
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
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-8 bg-secondary-500"
                  : "w-2.5 bg-secondary-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
