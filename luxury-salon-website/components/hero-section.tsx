"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  scrollY: number;
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Luxury Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/luxury-background.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Parallax Watermark Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <h2
          className="text-[12vw] md:text-[10vw] font-bold text-foreground/[0.03] whitespace-nowrap tracking-widest"
          style={{
            textShadow: "0 0 80px rgba(218,194,162,0.1)",
          }}
        >
          SHAKTI HAIR ART
        </h2>
      </div>

      {/* Secondary Parallax Layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-none mb-6">
            <span className="block text-balance">Shakti Hair Art</span>
          </h1>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-primary tracking-[0.3em] uppercase mb-12">
            Style &bull; Confidence &bull; Perfection
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000"
          style={{ animationDelay: "600ms", animationFillMode: "both" }}
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium text-lg tracking-wide rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          <Link
            href="#contact"
            className="group px-8 py-4 border border-primary/50 text-foreground font-medium text-lg tracking-wide rounded-sm transition-all duration-300 hover:border-primary hover:bg-primary/10"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#services"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-sm tracking-widest uppercase">Explore</span>
          <ChevronDown size={24} />
        </Link>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
      <div className="absolute top-1/3 right-8 w-px h-48 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block" />
    </section>
  );
}
