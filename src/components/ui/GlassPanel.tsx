import { cn } from "@/lib/utils";
import React from "react";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: "cyan" | "magenta" | "lime" | "none";
}

export const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, glow = "none", children, ...props }, ref) => {
    const glowClasses = {
      cyan: "border-neon-cyan/30 shadow-cyan-glow",
      magenta: "border-neon-magenta/30 shadow-magenta-glow",
      lime: "border-neon-lime/30 shadow-lime-glow",
      none: "",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "glass rounded-3xl transition-all duration-300",
          glowClasses[glow],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassPanel.displayName = "GlassPanel";