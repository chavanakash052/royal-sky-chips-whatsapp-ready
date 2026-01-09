import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917620404725";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Royal Sky Chips, I would like to order some banana chips!`,
      "_blank"
    );
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-pulse-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-card text-foreground px-3 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Chat with us!
      </span>

      {/* Ripple Effect */}
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
    </button>
  );
};

export default WhatsAppButton;
