import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-graphite-dark border-t border-border">
      {/* Main Footer Content */}
      <div className="container-premium py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center">
                <span className="text-background font-bold text-lg">A</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Apex Motors
              </span>
            </div>
            <p className="text-sm text-foreground/70">
              Experience the art of performance. Premium vehicles for the
              discerning collector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Explore Collection", "Test Drive", "About Us", "Blog"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {["Customer Service", "Documentation", "FAQ", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-gold transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@apexmotors.com"
                  className="text-sm text-foreground/70 hover:text-gold transition-colors duration-300"
                >
                  info@apexmotors.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/70">
                  123 Luxury Lane, Manhattan, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-foreground/60">
            © 2024 Apex Motors. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-lg border border-border hover:border-gold hover:bg-gold/10 flex items-center justify-center text-foreground/60 hover:text-gold transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-foreground/60 hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
