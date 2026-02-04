import PremiumButton from "./PremiumButton";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA: {
    label: string;
    onClick?: () => void;
  };
  secondaryCTA: {
    label: string;
    onClick?: () => void;
  };
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image - Right aligned for asymmetry */}
      <div
        className="absolute inset-0 bg-cover bg-right-top md:bg-center scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Layered Overlay - Creates depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

      {/* Subtle glow accent - bottom right */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

      {/* Content - Asymmetrical positioning */}
      <div className="relative h-full flex items-center">
        <div className="container-premium w-full">
          {/* Offset layout - text on left, breathing room on right */}
          <div className="w-full md:w-3/5 lg:w-1/2 space-y-8 animate-fade-in md:pr-12">
            {/* Accent line above title */}
            <div className="w-12 h-1 bg-gradient-to-r from-gold to-gold/0" />

            {/* Main Headline - Short, confident */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-wider">
              {title}
            </h1>

            {/* Subtitle - Restrained, elegant */}
            <p className="text-base md:text-lg text-foreground/80 max-w-lg leading-relaxed font-body">
              {subtitle}
            </p>

            {/* CTA Buttons - Generous spacing */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <PremiumButton
                variant="primary"
                size="lg"
                onClick={primaryCTA.onClick}
                className="group relative overflow-hidden"
              >
                {primaryCTA.label}
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gold/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </PremiumButton>

              <PremiumButton
                variant="secondary"
                size="lg"
                onClick={secondaryCTA.onClick}
                className="group relative overflow-hidden"
              >
                {secondaryCTA.label}
                {/* Glow effect */}
                <div className="absolute inset-0 bg-foreground/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Subtle and refined */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2 hover:border-gold/50 transition-colors duration-300">
          <div className="w-1 h-2 bg-foreground/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
