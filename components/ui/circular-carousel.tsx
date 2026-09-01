"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import "./circular-carousel.css";

export interface CarouselItem {
  id: string;
  title: string;
  description: string;
  tag?: string;
  role?: string;
  avatar?: string;
  stars?: string;
}

export interface CircularCarouselProps {
  items: CarouselItem[];
  activeIndex?: number;
  onActiveChange?: (index: number) => void;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const VISIBLE_COUNT = 5;

function getInitials(name: string) {
  const clean = name.replace(/[^a-zA-Z\s]/g, "").trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return clean.slice(0, 2).toUpperCase();
}

export function CircularCarousel({
  items,
  activeIndex: controlledIndex,
  onActiveChange,
  autoPlay = true,
  autoPlayInterval = 4500,
  className = "",
}: CircularCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [radiusX, setRadiusX] = useState(360);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = controlledIndex ?? internalIndex;
  const total = items.length;

  // Dynamically calculate responsive orbital radius
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setRadiusX(165);
      } else if (window.innerWidth < 1024) {
        setRadiusX(260);
      } else {
        setRadiusX(360);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getItemPosition = useCallback(
    (index: number) => {
      const offset = index - activeIndex;
      const half = Math.floor(VISIBLE_COUNT / 2);
      let adjustedOffset = offset;

      if (offset > half) adjustedOffset = offset - total;
      if (offset < -half) adjustedOffset = offset + total;

      if (Math.abs(adjustedOffset) > half * 2) return null;

      const angle = (adjustedOffset / VISIBLE_COUNT) * Math.PI;
      // Ellipse formula: active card (offset = 0) is front and center (x = 0, y = 0)
      const x = Math.sin(angle) * radiusX;
      const y = (Math.cos(angle) - 1) * 55;

      const distance = Math.abs(adjustedOffset);
      const maxDistance = half + 1;
      const scale = Math.max(0.74, 1 - (distance / maxDistance) * 0.26);
      const opacity = Math.max(0.28, 1 - (distance / maxDistance) * 0.62);
      const zIndex = 12 - distance * 2;

      return { x, y, scale, opacity, zIndex, adjustedOffset };
    },
    [activeIndex, total, radiusX],
  );

  const goTo = useCallback(
    (index: number) => {
      const newIndex = ((index % total) + total) % total;
      if (controlledIndex === undefined) {
        setInternalIndex(newIndex);
      }
      onActiveChange?.(newIndex);
    },
    [total, controlledIndex, onActiveChange],
  );

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (!autoPlay || isHovered || isFocused) return;
    intervalRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, autoPlayInterval, isHovered, isFocused, next]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const el = containerRef.current;
    el?.addEventListener("keydown", handler);
    return () => el?.removeEventListener("keydown", handler);
  }, [next, prev]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      role="region"
      aria-label="Client reviews carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={cn("circular-carousel-wrapper", className)}
    >
      {/* Ambient background glow */}
      <div className="circular-ambient-glow" aria-hidden="true" />

      {/* Circular 3D Orbital Track */}
      <div className="circular-stage">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => {
            const pos = getItemPosition(i);
            if (!pos) return null;

            const isActive = i === activeIndex;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{
                  x: pos.x,
                  y: pos.y,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  zIndex: pos.zIndex,
                }}
                exit={{ opacity: 0, scale: 0.75 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => goTo(i)}
                role="option"
                aria-selected={isActive}
                className={cn("review-orbit-card", isActive && "is-active")}
              >
                {/* Header: Tag + Star Rating */}
                <div className="review-card-top">
                  {item.tag && (
                    <span className="review-tag">
                      <Sparkles size={11} />
                      {item.tag}
                    </span>
                  )}
                  <div className="review-stars" aria-label="5 stars">
                    ★★★★★
                  </div>
                </div>

                {/* Body: Quote Text */}
                <div className="review-card-body">
                  <p className="review-quote-text">
                    &ldquo;{item.description}&rdquo;
                  </p>
                </div>

                {/* Footer: Avatar + Name + Role */}
                <div className="review-card-footer">
                  <div className="review-avatar-badge">
                    {item.avatar || getInitials(item.title)}
                  </div>

                  <div className="review-author-info">
                    <span className="review-author-name">{item.title}</span>
                    {item.role && (
                      <span className="review-author-role">{item.role}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Floating Modern Luxury Control Bar */}
      <div className="carousel-nav-bar">
        {/* Backward Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          onClick={prev}
          aria-label="Previous review"
          className="carousel-nav-btn"
        >
          <ChevronLeft size={16} />
        </motion.button>

        {/* Dynamic Indicator Dots */}
        <div className="carousel-dots-list" role="tablist">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              onClick={() => goTo(i)}
              className={cn("carousel-dot", i === activeIndex && "is-active")}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter in Mono font */}
        <div className="carousel-counter-badge">
          <span className="current-num">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span> / </span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>

        {/* Forward Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          onClick={next}
          aria-label="Next review"
          className="carousel-nav-btn"
        >
          <ChevronRight size={16} />
        </motion.button>
      </div>
    </div>
  );
}

export default CircularCarousel;
