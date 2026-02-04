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

      {/* Featured Cars Section */}
      <section
        id="collection"
        className="section-spacing bg-background"
      >
        <div className="container-premium">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Featured Vehicles
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Handpicked masterpieces from our premium inventory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.5s ease-out 0.1s forwards",
            }}>
              <VehicleCard
                name="Mercedes-AMG GT 63 S"
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80"
                tags={["Performance", "Luxury"]}
                price="$180,000"
                description="Twin-turbo V8 with 630 hp of pure precision engineering."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.5s ease-out 0.2s forwards",
            }}>
              <VehicleCard
                name="Tesla Model S Plaid"
                image="https://images.unsplash.com/photo-1617654112368-307921291f42?w=500&q=80"
                tags={["Electric", "Innovation"]}
                price="$115,000"
                description="0-60 mph in 1.99 seconds. The future of performance is now."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.5s ease-out 0.3s forwards",
            }}>
              <VehicleCard
                name="BMW X7 M50i"
                image="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&q=80"
                tags={["Luxury", "SUV"]}
                price="$145,000"
                description="Premium luxury SUV with commanding presence and sophisticated technology."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.5s ease-out 0.4s forwards",
            }}>
              <VehicleCard
                name="Lamborghini Revuelto"
                image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=80"
                tags={["Hypercar", "Exclusive"]}
                price="$645,000"
                description="Revolutionary hybrid hypercar redefining performance and sustainability."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.5s ease-out 0.5s forwards",
            }}>
              <VehicleCard
                name="Porsche 911 Turbo S"
                image="https://images.unsplash.com/photo-1553882900-f2b06423f100?w=500&q=80"
                tags={["Speed", "Heritage"]}
                price="$210,000"
                description="Legendary performance with 640 hp of turbo-charged excellence."
              />
            </div>

            <div className="animate-slide-up opacity-0" style={{
              animation: "slide-up 0.5s ease-out 0.6s forwards",
            }}>
              <VehicleCard
                name="Rolls-Royce Ghost"
                image="https://images.unsplash.com/photo-1599156571362-3fdddc65aa6f?w=500&q=80"
                tags={["Luxury", "Prestige"]}
                price="$380,000"
                description="The pinnacle of handcrafted luxury and refinement."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-spacing gradient-premium">
        <div className="container-premium">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why Choose Apex Motors
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We're not just a dealership. We're stewards of automotive
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Trophy,
                title: "Curated Selection",
                description:
                  "Each vehicle undergoes rigorous inspection and authentication",
              },
              {
                icon: Shield,
                title: "Transparency",
                description:
                  "Complete service history and transparent pricing with no hidden fees",
              },
              {
                icon: Gauge,
                title: "Performance Verified",
                description:
                  "Every car tested for peak performance and safety standards",
              },
              {
                icon: Sparkles,
                title: "Premium Support",
                description:
                  "Dedicated concierge service and lifetime consultation included",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer animate-slide-up opacity-0"
                style={{
                  animation: `slide-up 0.5s ease-out ${0.1 + index * 0.1}s forwards`,
                }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/30 group-hover:border-gold/60 group-hover:bg-gold/30 transition-all duration-300 mb-6">
                  <item.icon
                    size={32}
                    className="text-gold group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="section-spacing bg-gradient-to-br from-background via-graphite-dark to-background relative overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />

        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to Experience Excellence?
            </h2>

            <p className="text-lg text-foreground/80 mb-8">
              Join our exclusive circle of discerning collectors. Schedule your
              private test drive today and experience automotive mastery like
              never before.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton
                variant="primary"
                size="lg"
                className="sm:w-auto"
              >
                Book Test Drive Now
              </PremiumButton>

              <PremiumButton
                variant="secondary"
                size="lg"
                className="sm:w-auto"
              >
                Contact Concierge
              </PremiumButton>
            </div>

            <p className="text-sm text-foreground/60 mt-8">
              Response within 2 hours • Dedicated specialist assigned •
              Flexible scheduling
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
