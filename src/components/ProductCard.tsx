import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
  prices: {
    weight: string;
    price: string;
  }[];
  isFresh?: boolean;
}

const WHATSAPP_NUMBER = "917620404725";

const ProductCard = ({ name, description, image, prices, isFresh }: ProductCardProps) => {
  const [selectedWeight, setSelectedWeight] = useState(prices[0]);

  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `Hello Royal Sky Chips, I want to order ${name} – ${selectedWeight.weight}. Please share price and delivery details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleAddToCart = () => {
    toast.success(`Added to cart!`, {
      description: `${name} (${selectedWeight.weight}) - ${selectedWeight.price}`,
    });
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isFresh && (
          <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Check className="w-3 h-3" />
            Fresh Batch
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>

        {/* Weight Options */}
        <div className="flex flex-wrap gap-2 mb-4">
          {prices.map((option) => (
            <button
              key={option.weight}
              onClick={() => setSelectedWeight(option)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                selectedWeight.weight === option.weight
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {option.weight}
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-foreground">
            {selectedWeight.price}
          </span>
          <span className="text-sm text-muted-foreground">
            per pack
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={handleAddToCart}>
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
          <Button variant="whatsapp" className="flex-1" onClick={handleBuyNow}>
            <MessageCircle className="w-4 h-4" />
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
