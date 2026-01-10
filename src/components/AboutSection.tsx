import { Heart, Users, Clock, Award } from "lucide-react";

const stats = [
  { icon: Heart, value: "1000+", label: "Happy Customers" },
  { icon: Clock, value: "3+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Quality Assured" },
  { icon: Users, value: "50+", label: "Retail Partners" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Our Story
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              About Royal Sky Chips
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded by <strong className="text-foreground">Abhijit Chavan</strong>, Royal Sky Chips is born from a passion for preserving the authentic taste of traditional Indian snacks. What started as a small home kitchen has grown into a beloved brand trusted by families across India.
              </p>
              <p>
                Every chip we make follows time-honored recipes passed down through generations. We hand-pick only the finest raw bananas, slice them to perfection, and fry them in pure, quality oil to achieve that irresistible golden crunch.
              </p>
              <p>
                Our commitment is simple: deliver fresh, preservative-free banana chips that bring joy to every snacking moment. From family gatherings to tea-time treats, Royal Sky Chips is your trusted companion for authentic taste.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <span className="font-display font-bold text-2xl text-primary">AC</span>
              </div>
              <div>
                <p className="font-semibold text-foreground">Abhijit Chavan</p>
                <p className="text-sm text-muted-foreground">Founder, Royal Sky Chips</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
