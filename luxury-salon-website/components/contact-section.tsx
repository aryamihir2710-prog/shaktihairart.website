"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export function ContactSection() {
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
      id="contact"
      className="relative py-24 md:py-32 bg-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Visit Us Today
          </h2>
          <div className="w-24 h-px bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Address Card */}
            <div className="glass-card p-8 rounded-lg group hover:bg-primary/5 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Our Location
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A1, Om, SHANTI COMPLEX, Block W,
                    <br />
                    Shrinand Nagar Part-2, Shrinand Nagar,
                    <br />
                    Vejalpur, Ahmedabad, Gujarat 380051
                  </p>
                  <a
                    href="https://maps.google.com/?q=A1,+Om,+SHANTI+COMPLEX,+Block+W,+Shrinand+Nagar+Part-2,+Shrinand+Nagar,+Vejalpur,+Ahmedabad,+Gujarat+380051"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary mt-4 hover:underline"
                  >
                    Get Directions <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-8 rounded-lg group hover:bg-primary/5 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Call Us
                  </h3>
                  <a
                    href="tel:+917016700454"
                    className="text-2xl text-primary font-medium hover:underline"
                  >
                    +91 70167 00454
                  </a>
                  <p className="text-muted-foreground mt-2">
                    Call to book your appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="glass-card p-8 rounded-lg group hover:bg-primary/5 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Working Hours
                  </h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Saturday: 10:00 AM - 9:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="glass-card rounded-lg overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=A1,+Om,+SHANTI+COMPLEX,+Block+W,+Shrinand+Nagar+Part-2,+Vejalpur,+Ahmedabad,+Gujarat+380051&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shakti Hair Art Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  );
}
