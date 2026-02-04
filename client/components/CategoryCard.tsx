import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export default function CategoryCard({
  title,
  description,
  icon,
  className,
}: CategoryCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl h-96 md:h-80 cursor-pointer transition-all duration-500",
        "hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2",
        "bg-gradient-to-br from-graphite-light/80 to-graphite-dark/60",
        className
      )}
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-electric-blue/5 transition-opacity duration-700 group-hover:opacity-0" />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-70" />

      {/* Hover Effect - Enhanced depth with multi-layer overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow accent on hover */}
      <div className="absolute inset-0 group-hover:shadow-inset-gold transition-all duration-500" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8 space-y-3">
        {icon && (
          <div className="text-gold text-4xl group-hover:scale-110 group-hover:text-gold-light transition-all duration-300">
            {icon}
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>

          <p className="text-xs md:text-sm text-foreground/70 line-clamp-2 group-hover:text-foreground/90 transition-colors duration-300 font-body">
            {description}
          </p>
        </div>
      </div>

      {/* Subtle frame on hover */}
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 rounded-xl transition-all duration-500 pointer-events-none" />

      {/* Lifted shadow effect */}
      <div className="absolute -inset-1 bg-gradient-to-b from-gold/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
    </div>
  );
}
