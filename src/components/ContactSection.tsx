import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "917620404725";
const PHONE_NUMBER = "+91 7620404725";

const ContactSection = () => {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Royal Sky Chips, I have a question about your products.`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground">
                Have questions or want to place a custom order? We'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm mb-2">Quick responses, easy ordering</p>
                  <Button variant="whatsapp" size="sm" onClick={openWhatsApp}>
                    Chat Now
                  </Button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm mb-2">Call us for immediate assistance</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Monday - Saturday: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
              <Button variant="golden" className="w-full" type="button" onClick={openWhatsApp}>
                <MessageCircle className="w-4 h-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
