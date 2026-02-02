import Link from "next/link";
import { Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-background border-t border-border/50">
      {/* Instagram Follow Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <a
          href="https://www.instagram.com/shakti.hair.art"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center justify-center gap-4 py-8 px-6 rounded-xl glass-card hover:border-primary/40 transition-all duration-500"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Instagram className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Follow us on Instagram
            </span>
            <span className="block text-muted-foreground text-sm mt-1 group-hover:text-foreground/70 transition-colors duration-300">
              @shakti.hair.art
            </span>
          </div>
          <div className="hidden sm:block ml-4 w-8 h-px bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-500" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="#home"
              className="text-3xl font-semibold text-primary tracking-wide"
            >
              Shakti Hair Art
            </Link>
            <p className="text-muted-foreground mt-2 tracking-wider">
              Style &bull; Confidence &bull; Perfection
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            <Link
              href="#home"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <a
              href="tel:+917016700454"
              className="text-lg text-primary hover:underline"
            >
              +91 70167 00454
            </a>
            <p className="text-muted-foreground mt-1 text-sm">
              Vejalpur, Ahmedabad
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Shakti Hair Art. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
}
