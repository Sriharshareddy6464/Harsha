"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A minimal Tailwind button component.
 * - Fully clickable (no pointer-event issues)
 * - Works with `as="a"` for links
 * - Can handle onClick for actions
 * - Consistent hover/active effects
 */

const Button = React.forwardRef(
  ({ className, variant = "default", size = "md", as: Component = "button", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      default: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
      outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-300",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
