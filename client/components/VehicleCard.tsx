import { cn } from "@/lib/utils";
import PremiumButton from "./PremiumButton";

interface VehicleCardProps {
  name: string;
  image: string;
  tags: string[];
  price?: string;
  description?: string;
  className?: string;
}

export default function VehicleCard({
  name,
  image,
  tags,
  price,
  description,
  className,
}: VehicleCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-300 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-graphite">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/30" />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-gold text-background"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {name}
        </h3>

        {description && (
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
            {description}
          </p>
        )}

        {price && (
          <p className="text-lg font-semibold text-gold mb-4">
            Starting from {price}
          </p>
        )}

        <PremiumButton
          variant="secondary"
          size="sm"
          className="w-full"
        >
          View Details
        </PremiumButton>
      </div>

      {/* Ambient glow on hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
    </div>
  );
}
