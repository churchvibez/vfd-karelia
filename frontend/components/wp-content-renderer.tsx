"use client";

import { useEffect, useRef } from "react";
import "./auto-slideshow.scss";

interface WPContentRendererProps {
  content: string;
  className?: string;
}

export default function WPContentRenderer({
  content,
  className = "",
}: WPContentRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const galleries = containerRef.current.querySelectorAll(
      ".wp-block-gallery.auto-slideshow"
    );

    galleries.forEach((gallery) => {
      const images = gallery.querySelectorAll("img");
      if (images.length === 0) return;

      const imageSources: string[] = [];
      images.forEach((img) => {
        const src = img.getAttribute("src") || img.getAttribute("data-src");
        if (src) imageSources.push(src);
      });

      if (imageSources.length === 0) return;

      const slideshow = document.createElement("div");
      slideshow.className = "auto-slideshow";

      imageSources.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        img.className = `slideshow-image ${index === 0 ? "active" : ""}`;
        slideshow.appendChild(img);
      });

      if (imageSources.length > 1) {
        const dotsContainer = document.createElement("div");
        dotsContainer.className = "slideshow-dots";

        imageSources.forEach((_, index) => {
          const dot = document.createElement("button");
          dot.className = `slideshow-dot ${index === 0 ? "active" : ""}`;
          dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
          dot.addEventListener("click", () => {
            goToSlide(slideshow, index);
          });
          dotsContainer.appendChild(dot);
        });

        slideshow.appendChild(dotsContainer);

        let currentIndex = 0;
        const interval = setInterval(() => {
          currentIndex = (currentIndex + 1) % imageSources.length;
          goToSlide(slideshow, currentIndex);
        }, 5000);

        (slideshow as any)._slideshowInterval = interval;
      }

      gallery.replaceWith(slideshow);
    });

    return () => {
      if (!containerRef.current) return;
      const slideshows = containerRef.current.querySelectorAll(".auto-slideshow");
      slideshows.forEach((slideshow) => {
        const interval = (slideshow as any)._slideshowInterval;
        if (interval) clearInterval(interval);
      });
    };
  }, [content]);

  return (
    <div
      ref={containerRef}
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

function goToSlide(slideshow: Element, index: number) {
  const images = slideshow.querySelectorAll(".slideshow-image");
  const dots = slideshow.querySelectorAll(".slideshow-dot");

  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}
