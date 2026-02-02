"use client";

import React, { useEffect, useRef, useState } from "react";
import { Scissors, Sparkles, Palette, User, Droplets, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Scissors,
    name: "Hair Cut",
    price: 150,
    isStartingFrom: false,
  },
  {
    icon: Palette,
    name: "Hair Colour",
    price: 200,
    isStartingFrom: true,
  },
  {
    icon: Droplets,
    name: "Hair Spa",
    price: 550,
    isStartingFrom: false,
  },
  {
    icon: Sparkles,
    name: "Hair Styling",
    price: 100,
    isStartingFrom: false,
  },
  {
    icon: User,
    name: "Beard Styling",
    price: 100,
    isStartingFrom: false,
  },
  {
    icon: Leaf,
    name: "Facial",
    price: 1000,
    isStartingFrom: true,
  },
];

export function PricingSection() {
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
      id="pricing"
      className="relative py-24 md:py-32 bg-pricing-bg"
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
          <span className="text-pricing-accent tracking-[0.3em] uppercase text-sm mb-4 block">
            Affordable Luxury
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services & Prices
          </h2>
          <div className="w-24 h-px bg-pricing-accent mx-auto" />
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <PricingCard
              key={service.name}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div
        className={`flex justify-center mt-16 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
        style={{
          transitionDelay: isVisible ? "600ms" : "0ms",
        }}
      >
        <Button
          size="lg"
          className="bg-pricing-accent text-pricing-accent-foreground hover:bg-pricing-accent/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Book Now
        </Button>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pricing-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pricing-accent/20 to-transparent" />
    </section>
  );
}

interface PricingCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    name: string;
    price: number;
    isStartingFrom: boolean;
  };
  index: number;
  isVisible: boolean;
}

function PricingCard({ service, index, isVisible }: PricingCardProps) {
  const Icon = service.icon;

  return (
    <div
      className={`pricing-card group relative p-8 rounded-2xl transition-all duration-700 cursor-pointer overflow-hidden border border-pricing-border hover:border-pricing-accent/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
      }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pricing-card to-pricing-card-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 relative">
          <div className="w-16 h-16 rounded-full bg-pricing-accent/15 flex items-center justify-center transition-all duration-300 group-hover:bg-pricing-accent/25 group-hover:scale-110">
            <Icon className="w-8 h-8 text-pricing-accent transition-transform duration-300 group-hover:scale-110" />
          </div>
        </div>

        {/* Service Name */}
        <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-pricing-accent transition-colors duration-300">
          {service.name}
        </h3>

        {/* Price */}
        <div className="mb-6">
          {service.isStartingFrom && (
            <span className="inline-block bg-pricing-tag text-pricing-tag-foreground text-xs font-semibold px-3 py-1 rounded-full mb-2">
              Starting From
            </span>
          )}
          <div className="text-4xl font-bold text-pricing-accent">
            ₹{service.price.toLocaleString("en-IN")}
          </div>
        </div>

        {/* Hover Line */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-pricing-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}
