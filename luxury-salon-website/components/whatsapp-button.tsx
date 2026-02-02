"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "917016700454";
  const message = encodeURIComponent(
    "Hello! I would like to book an appointment at Shakti Hair Art."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-lg animate-pulse-glow transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        </div>

        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-card rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          <span className="text-foreground text-sm font-medium">
            Chat with us
          </span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-card rotate-45" />
        </div>
      </div>
    </a>
  );
}
