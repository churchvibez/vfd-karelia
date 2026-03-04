"use client";

import { useEffect, useState } from "react";

interface AutoSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function AutoSlideshow({
  images,
  interval = 5000,
  className = "",
}: AutoSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className={`auto-slideshow ${className}`}>
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`slideshow-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}
      {images.length > 1 && (
        <div className="slideshow-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`slideshow-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
