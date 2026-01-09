import { Sparkles, ShieldCheck, Package, Leaf } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "100% Freshly Made",
    description: "Each batch is prepared fresh daily to ensure maximum crispiness and flavor.",
  },
  {
    icon: ShieldCheck,
    title: "No Preservatives",
    description: "Pure and natural ingredients without any artificial additives or preservatives.",
  },
  {
    icon: Package,
    title: "Hygienic Packaging",
    description: "Sealed in food-grade packaging to maintain freshness and quality.",
  },
  {
    icon: Leaf,
    title: "Authentic Indian Taste",
    description: "Traditional recipes passed down through generations for authentic flavor.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Royal Sky Chips?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering the finest quality banana chips with a perfect blend of tradition and taste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
