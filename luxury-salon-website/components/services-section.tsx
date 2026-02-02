"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { Scissors, Sparkles, Palette, User, Droplets, Leaf } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Cut",
    description: "Precision cuts tailored to your style and personality",
  },
  {
    icon: Sparkles,
    title: "Hair Styling",
    description: "Expert styling for any occasion, from casual to glamorous",
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    description: "Premium coloring services using top-quality products",
  },
  {
    icon: User,
    title: "Beard Styling",
    description: "Classic and modern beard grooming for the refined gentleman",
  },
  {
    icon: Droplets,
    title: "Facial & Grooming",
    description: "Rejuvenating treatments for healthy, glowing skin",
  },
  {
    icon: Leaf,
    title: "Hair Spa",
    description: "Luxurious spa treatments for hair restoration and relaxation",
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 md:py-32 bg-secondary/20"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  };
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div
      className={`glass-card group relative p-8 rounded-lg transition-all duration-700 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Icon */}
      <div className="mb-6 relative">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="absolute -inset-2 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
