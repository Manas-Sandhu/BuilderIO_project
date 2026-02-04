import Layout from "@/components/Layout";
import PremiumButton from "@/components/PremiumButton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="container-premium text-center max-w-2xl mx-auto space-y-8 animate-fade-in">
          {/* 404 Display */}
          <div>
            <h1 className="text-9xl md:text-10xl font-display font-bold text-gold/50 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Page Not Found
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Sorry, the page you're looking for has taken a wrong turn. Let's
              get you back on the right path.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PremiumButton variant="primary" size="lg">
              Return Home
            </PremiumButton>
            <PremiumButton variant="secondary" size="lg">
              Contact Support
            </PremiumButton>
          </div>

          {/* Decorative Elements */}
          <div className="pt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-2xl" />
            <p className="text-sm text-foreground/50 relative">
              Need help? Our concierge team is here to assist.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
