import { Truck, Sparkles } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              Free Delivery on Orders Above ₹500
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Fresh Batch Available Daily
            </span>
            <span>•</span>
            <span>100% Natural · No Preservatives · Premium Quality</span>
            <span>•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
