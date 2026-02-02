"use client";

import React from "react"

import { useEffect, useRef, useState } from "react";
import { Award, Heart, Shield, Star } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Stylists",
    description: "Years of experience in premium grooming",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your satisfaction is our priority",
  },
  {
    icon: Shield,
    title: "Quality Products",
    description: "Only the finest professional products",
  },
  {
    icon: Star,
    title: "Premium Service",
    description: "Luxury experience in every visit",
  },
];

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <span className="text-primary tracking-[0.3em] uppercase text-sm mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Where Style Meets
              <span className="text-primary block">Excellence</span>
            </h2>
            <div className="w-24 h-px bg-primary mb-8" />

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Shakti Hair Art, we believe that great style is more than
                just a haircut—it is an experience that transforms how you feel
                about yourself. Our salon combines traditional craftsmanship with
                modern techniques to deliver results that exceed expectations.
              </p>
              <p>
                With years of dedicated service in Ahmedabad, we have built our
                reputation on trust, quality, and an unwavering commitment to
                customer satisfaction. Every client who walks through our doors
                receives personalized attention from our team of expert stylists.
              </p>
              <p>
                From classic cuts to contemporary styles, from relaxing spa
                treatments to precision grooming, we offer a complete range of
                services designed to help you look and feel your absolute best.
              </p>
            </div>
          </div>

          {/* Right Content - Features */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}

interface FeatureCardProps {
  feature: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
  };
  index: number;
  isVisible: boolean;
}

function FeatureCard({ feature, index, isVisible }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <div
      className={`glass-card p-6 rounded-lg text-center transition-all duration-700 group hover:bg-primary/5 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
      }}
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </div>
  );
}
