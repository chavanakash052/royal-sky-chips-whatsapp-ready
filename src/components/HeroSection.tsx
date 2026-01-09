import { Button } from "@/components/ui/button";
import { MessageCircle, Leaf, Shield, Award } from "lucide-react";
import heroImage from "@/assets/hero-chips.jpg";

const WHATSAPP_NUMBER = "917620404725";

const HeroSection = () => {
  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Royal Sky Chips, I would like to order some delicious banana chips!`,
      "_blank"
    );
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-cream-dark to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-secondary" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Fresh Batch Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="w-4 h-4" />
              Today's Fresh Batch Available
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Fresh & Crispy
              <span className="block text-primary">Premium Banana Chips</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Traditional taste made from hand-picked bananas. Experience the authentic crunch of Kerala-style banana chips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-medium">100% Natural</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-medium">No Preservatives</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Premium Banana Chips Package"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
