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
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-background/40" />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-premium w-full">
          <div className="max-w-2xl mx-auto md:mx-0 space-y-6 animate-fade-in">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight tracking-wider">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/90 max-w-xl leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <PremiumButton
                variant="primary"
                size="lg"
                onClick={primaryCTA.onClick}
                className="group"
              >
                {primaryCTA.label}
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </PremiumButton>

              <PremiumButton
                variant="secondary"
                size="lg"
                onClick={secondaryCTA.onClick}
              >
                {secondaryCTA.label}
              </PremiumButton>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
