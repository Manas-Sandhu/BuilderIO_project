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
        "group relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-500",
        "hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-3",
        className
      )}
    >
      {/* Image Container - Cinematic transition */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-graphite">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
        />

        {/* Layered overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />

        {/* Enhanced hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Tags with elevated styling */}
        {tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gold text-background transition-all duration-300 group-hover:bg-gold-light group-hover:shadow-lg group-hover:shadow-gold/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content - Strategic spacing */}
      <div className="p-6 md:p-8 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>

          {description && (
            <p className="text-xs md:text-sm text-foreground/65 line-clamp-2 group-hover:text-foreground/80 transition-colors duration-300 font-body">
              {description}
            </p>
          )}
        </div>

        {price && (
          <p className="text-base font-semibold text-gold group-hover:text-gold-light transition-colors duration-300">
            Starting from {price}
          </p>
        )}

        <PremiumButton
          variant="secondary"
          size="sm"
          className="w-full group/btn relative overflow-hidden"
        >
          <span className="relative z-10">View Details</span>
          {/* Button glow */}
          <div className="absolute inset-0 bg-foreground/5 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
        </PremiumButton>
      </div>

      {/* Lifted shadow - Creates depth */}
      <div className="absolute -inset-1 bg-gradient-to-b from-gold/20 via-gold/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl" />

      {/* Subtle frame accent */}
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-xl transition-all duration-500 pointer-events-none" />
    </div>
  );
}
