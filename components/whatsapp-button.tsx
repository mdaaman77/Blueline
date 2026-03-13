"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_NUMBER = "1234567890" // Replace with actual WhatsApp number

export function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent("Hello! I'm interested in your medical products.")
    window.open(`https://wa.me/${9153542010}?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  )
}
