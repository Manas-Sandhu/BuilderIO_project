import { cn } from "@/lib/utils";
import PremiumButton from "./PremiumButton";
import { Zap } from "lucide-react";

interface VehicleCardProps {
  name: string;
  tags: string[];
  price?: string;
  description?: string;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function VehicleCard({
  name,
  tags,
  price,
  description,
  className,
  gradientFrom = "from-slate-800",
  gradientTo = "to-slate-900",
}: VehicleCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card border border-border/50 transition-all duration-500",
        "hover:border-gold/60 hover:shadow-2xl hover:shadow-gold/15 hover:-translate-y-3",
        className
      )}
    >
      {/* Vehicle Showcase Area - Gradient with decorative elements */}
      <div className={cn("relative h-64 md:h-72 overflow-hidden flex items-center justify-center", `bg-gradient-to-br ${gradientFrom} ${gradientTo}`)}>
        {/* Layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 via-transparent to-electric-blue/15 opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Center accent - Car silhouette representation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gold/40 group-hover:border-gold/70 transition-all duration-500" />

            {/* Inner circle with icon */}
            <div className="absolute inset-4 rounded-full border border-gold/30 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
              <Zap className="w-8 h-8 text-gold/60 group-hover:text-gold transition-colors duration-500" />
            </div>
          </div>
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(218,169,32,0.03) 20px, rgba(218,169,32,0.03) 40px)`
        }} />

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
