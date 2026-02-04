import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Explore", href: "#explore" },
    { label: "Collection", href: "#collection" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-premium">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Clickable brand link */}
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center flex-shrink-0">
              <span className="text-background font-bold text-lg md:text-xl">
                A
              </span>
            </div>
            <span className="text-lg md:text-xl font-display font-bold text-foreground hidden sm:inline">
              Apex Motors
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden md:inline-flex px-6 py-2.5 rounded-lg font-semibold text-background bg-gold hover:bg-gold-light transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-gold/40">
            Book Test Drive
          </button>

          {/* Mobile Menu Button - Accessible touch target */}
          <button
            className="md:hidden p-3 text-foreground hover:text-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Optimized for touch */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-1 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-foreground/80 hover:text-gold hover:bg-foreground/5 rounded-lg transition-colors duration-300 font-body"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="px-4 py-3 mt-4 rounded-lg font-semibold text-background bg-gold hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-gold/40">
              Book Test Drive
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
