import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "small" | "large" | "full";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 md:px-8", // Reduced padding on smallest screens
          {
            "max-w-7xl": size === "default",
            "max-w-4xl": size === "small",
            "max-w-screen-2xl": size === "large",
            "": size === "full",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";
export { Container };