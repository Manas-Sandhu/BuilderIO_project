import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  icon?: ReactNode;
  className?: string;
}

export default function CategoryCard({
  title,
  description,
  image,
  icon,
  className,
}: CategoryCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl h-96 md:h-80 cursor-pointer",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      {/* Hover Effect - Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        {icon && <div className="mb-4 text-gold text-4xl">{icon}</div>}

        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 transition-all duration-300 group-hover:text-gold">
          {title}
        </h3>

        <p className="text-sm md:text-base text-foreground/80 line-clamp-2 group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle elevation border on hover */}
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-xl transition-all duration-300" />
    </div>
  );
}
