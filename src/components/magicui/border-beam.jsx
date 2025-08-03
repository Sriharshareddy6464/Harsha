"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function BorderBeam({
  className,
  duration = 6,
  delay = 0,
  size = 400,
  borderWidth = 1,
}) {
  const beamRef = useRef(null);

  useEffect(() => {
    const beam = beamRef.current;
    if (!beam) return;

    const animate = () => {
      beam.style.setProperty("--beam-size", `${size}px`);
      beam.style.setProperty("--beam-duration", `${duration}s`);
      beam.style.setProperty("--beam-delay", `${delay}s`);
      beam.style.setProperty("--beam-border-width", `${borderWidth}px`);
    };

    animate();
  }, [size, duration, delay, borderWidth]);

  return (
    <div
      ref={beamRef}
      className={cn(
        "absolute inset-0 overflow-hidden rounded-[inherit] [mask:linear-gradient(white,transparent)] [&:has(>div:first-child)]:rounded-[inherit]",
        className
      )}
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_var(--beam-duration)_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent [--beam-size:400px] [--beam-duration:6s] [--beam-delay:0s]"
        style={{
          background: `linear-gradient(90deg, transparent, var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to), transparent)`,
          backgroundSize: `${size}px 100%`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
}
