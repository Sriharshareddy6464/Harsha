"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function FlickeringGrid({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const squares = [];

    // Calculate grid dimensions
    const cols = Math.floor(width / (squareSize + gridGap));
    const rows = Math.floor(height / (squareSize + gridGap));

    // Initialize squares
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        squares.push({
          x: i * (squareSize + gridGap),
          y: j * (squareSize + gridGap),
          opacity: Math.random() * maxOpacity,
          flickering: false,
        });
      }
    }

    // Animation loop
    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      squares.forEach((square) => {
        // Random flickering
        if (Math.random() < flickerChance) {
          square.flickering = true;
          square.opacity = Math.random() * maxOpacity;
        } else if (square.flickering) {
          square.flickering = false;
          square.opacity = Math.random() * maxOpacity * 0.3;
        }

        // Draw square
        ctx.fillStyle = color;
        ctx.globalAlpha = square.opacity;
        ctx.fillRect(square.x, square.y, squareSize, squareSize);
      });

      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [squareSize, gridGap, color, maxOpacity, flickerChance, height, width]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn("pointer-events-none", className)}
    />
  );
} 