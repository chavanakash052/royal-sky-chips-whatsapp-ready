import { ShoppingBag, MousePointerClick, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ShoppingBag,
    step: "1",
    title: "Choose Product",
    description: "Browse our delicious range of banana chips and select your favorites.",
  },
  {
    icon: MousePointerClick,
    step: "2",
    title: "Click Buy Now",
    description: "Hit the 'Buy Now on WhatsApp' button on any product.",
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "WhatsApp Opens",
    description: "Chat with us directly on WhatsApp with your order details pre-filled.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Confirm Order",
    description: "Finalize your order and payment. We'll deliver to your doorstep!",
  },
];

const HowToOrderSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Easy Ordering
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            How to Order
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ordering is as easy as 1-2-3-4! Get your favorite chips delivered right to your door.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              {/* Step Circle */}
              <div className="relative inline-flex">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-xs font-bold flex items-center justify-center">
                  {item.step}
                </div>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
