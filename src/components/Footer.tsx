import { MessageCircle, Phone, Instagram } from "lucide-react";

const WHATSAPP_NUMBER = "917620404725";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-accent text-accent-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Royal Sky Chips</h3>
                <p className="text-xs text-accent-foreground/70">Premium Banana Chips</p>
              </div>
            </div>
            <p className="text-accent-foreground/80 text-sm max-w-sm mb-4">
              Bringing you the authentic taste of traditional Indian banana chips. Fresh, crispy, and made with love.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+917620404725"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/royalskychips?igsh=MTM4OHRvdjA4aGF3dQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-accent-foreground/10 flex items-center justify-center hover:bg-accent-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-accent-foreground/80 hover:text-accent-foreground transition-colors text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-accent-foreground/80">
              <p>WhatsApp: +91 7620404725</p>
              <p>Phone: +91 7620404725</p>
              <p>Karad, Satara, Maharashtra, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/10 pt-8 text-center text-sm text-accent-foreground/60">
          <p>© {new Date().getFullYear()} Royal Sky Chips. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ by Akash Chavan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
