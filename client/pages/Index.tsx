import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";
import VehicleCard from "@/components/VehicleCard";
import PremiumButton from "@/components/PremiumButton";
import SectionDivider from "@/components/SectionDivider";
import {
  Zap,
  Gauge,
  Crown,
  Shield,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function Index() {
  const handleExplore = () => {
    const element = document.getElementById("collection");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTestDrive = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Experience the Art of Performance"
        subtitle="Discover our curated collection of luxury, sports, and electric vehicles designed for those who demand excellence. Every drive is a masterpiece."
        backgroundImage="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1920&q=80"
        primaryCTA={{
          label: "Explore Collection",
          onClick: handleExplore,
        }}
        secondaryCTA={{
          label: "Book a Test Drive",
          onClick: handleTestDrive,
        }}
      />

      {/* Section Divider */}
      <SectionDivider />

      {/* Car Categories Section */}
      <section
        id="explore"
        className="section-spacing gradient-premium relative"
      >
        <div className="container-premium">
          <div className="mb-16 md:mb-20 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Explore Collections
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl font-body">
              Each curated selection represents automotive mastery.
            </p>
          </div>

          {/* Staggered grid layout for visual interest */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.6s ease-out 0.1s forwards",
            }}>
              <CategoryCard
                title="SUV"
                description="Command and presence. Luxury meets capability."
                image="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&q=80"
                icon={<Crown size={32} />}
              />
            </div>

            <div className="animate-slide-up opacity-0 md:translate-y-8" style={{
              animation: "slide-up 0.6s ease-out 0.2s forwards",
            }}>
              <CategoryCard
                title="Sports"
                description="Precision and adrenaline. Pure performance."
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80"
                icon={<Zap size={32} />}
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.6s ease-out 0.3s forwards",
            }}>
              <CategoryCard
                title="Electric"
                description="Innovation and sustainability. The future now."
                image="https://images.unsplash.com/photo-1617654112368-307921291f42?w=600&q=80"
                icon={<Sparkles size={32} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Featured Cars Section */}
      <section
        id="collection"
        className="section-spacing bg-background relative"
      >
        <div className="container-premium">
          <div className="mb-16 md:mb-20 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Featured Vehicles
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl font-body">
              Handpicked masterpieces from our collection.
            </p>
          </div>

          {/* Asymmetrical staggered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-max">
            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.6s ease-out 0.1s forwards",
            }}>
              <VehicleCard
                name="Mercedes-AMG GT 63 S"
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80"
                tags={["Performance", "Luxury"]}
                price="$180,000"
                description="Twin-turbo precision."
              />
            </div>

            <div className="animate-slide-up opacity-0 md:translate-y-12" style={{
              animation: "slide-up 0.6s ease-out 0.2s forwards",
            }}>
              <VehicleCard
                name="Tesla Model S Plaid"
                image="https://images.unsplash.com/photo-1617654112368-307921291f42?w=500&q=80"
                tags={["Electric", "Innovation"]}
                price="$115,000"
                description="0-60 in 1.99 seconds."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.6s ease-out 0.3s forwards",
            }}>
              <VehicleCard
                name="BMW X7 M50i"
                image="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&q=80"
                tags={["Luxury", "SUV"]}
                price="$145,000"
                description="Premium commanding presence."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.6s ease-out 0.4s forwards",
            }}>
              <VehicleCard
                name="Lamborghini Revuelto"
                image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
                tags={["Hypercar", "Exclusive"]}
                price="$645,000"
                description="Hybrid innovation redefined."
              />
            </div>

            <div className="animate-slide-up opacity-0 md:translate-y-12" style={{
              animation: "slide-up 0.6s ease-out 0.5s forwards",
            }}>
              <VehicleCard
                name="Porsche 911 Turbo S"
                image="https://images.unsplash.com/photo-1553882900-f2b06423f100?w=500&q=80"
                tags={["Speed", "Heritage"]}
                price="$210,000"
                description="640 hp of legendary power."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.6s ease-out 0.6s forwards",
            }}>
              <VehicleCard
                name="Rolls-Royce Ghost"
                image="https://images.unsplash.com/photo-1599156571362-3fdddc65aa6f?w=500&q=80"
                tags={["Luxury", "Prestige"]}
                price="$380,000"
                description="Handcrafted mastery."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Why Choose Us Section */}
      <section className="section-spacing gradient-premium relative">
        <div className="container-premium">
          <div className="mb-16 md:mb-20 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Why Apex Motors
            </h2>
            <p className="text-base text-foreground/70 max-w-2xl font-body">
              Stewards of automotive excellence. Trusted by collectors worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: "Curated",
                description: "Rigorous inspection and authentication.",
              },
              {
                icon: Shield,
                title: "Transparent",
                description: "Complete history. No hidden fees.",
              },
              {
                icon: Gauge,
                title: "Verified",
                description: "Peak performance and safety tested.",
              },
              {
                icon: Sparkles,
                title: "Support",
                description: "Dedicated concierge. Lifetime guidance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-slide-up opacity-0 relative"
                style={{
                  animation: `slide-up 0.6s ease-out ${0.1 + index * 0.1}s forwards`,
                }}
              >
                {/* Card background with subtle depth */}
                <div className="relative p-6 md:p-8 rounded-xl bg-gradient-to-br from-graphite-light/50 to-graphite-dark/30 border border-gold/10 group-hover:border-gold/40 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-gold/10 group-hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-gold/30 to-gold/10 border border-gold/40 group-hover:bg-gold/40 group-hover:border-gold/60 group-hover:scale-110 transition-all duration-300 mb-4">
                    <item.icon
                      size={28}
                      className="text-gold group-hover:text-gold-light transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-foreground/70 group-hover:text-foreground/85 transition-colors duration-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* Final CTA Section - Calm, powerful, isolated */}
      <section
        id="contact"
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      >
        {/* Premium background with depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-graphite-dark to-background -z-20" />

        {/* Decorative ambient glows */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-electric-blue/8 rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-gold/8 rounded-full blur-3xl -z-10 opacity-60" />

        {/* Soft gradient divider lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="container-premium relative">
          {/* Centered, spacious layout emphasizing isolation */}
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Accent line */}
            <div className="flex justify-center">
              <div className="w-12 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
            </div>

            {/* Primary headline - Confident invitation */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight tracking-tight">
                Begin Your Journey
              </h2>
              <p className="text-base md:text-lg text-foreground/75 leading-relaxed font-body mx-auto">
                Experience automotive excellence. Private test drive, dedicated guidance, exclusive access to our collection.
              </p>
            </div>

            {/* CTA Buttons - Generous spacing, centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <PremiumButton
                variant="primary"
                size="lg"
                className="relative"
              >
                Schedule Test Drive
              </PremiumButton>

              <PremiumButton
                variant="secondary"
                size="lg"
                className="relative"
              >
                Contact Specialist
              </PremiumButton>
            </div>

            {/* Trust indicators - Minimal, elegant */}
            <div className="pt-8 space-y-3">
              <p className="text-xs md:text-sm text-foreground/60 tracking-wide uppercase font-semibold letter-spacing">
                Concierge Response: Within 2 Hours
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-xs text-foreground/50">•</span>
                <span className="text-xs text-foreground/50">Expert guidance included</span>
                <span className="text-xs text-foreground/50">•</span>
                <span className="text-xs text-foreground/50">Flexible scheduling</span>
                <span className="text-xs text-foreground/50">•</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
