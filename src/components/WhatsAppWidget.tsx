"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  // US phone number: +1 (757) 338-3452
  // Format for WhatsApp: country code + number (no +, spaces, or dashes)
  const phoneNumber = "17573383452";
  const preFilledMessage = encodeURIComponent(
    "Hello LYNX Finance Consulting, I'd like to learn more about your services."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${preFilledMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl lg:bottom-8 lg:right-8 lg:h-16 lg:w-16"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white lg:h-8 lg:w-8" />
      {/* Pulse animation ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  );
}

