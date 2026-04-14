import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const WHATSAPP_NUMBER = "917620404725";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    const orderLines = items.map(
      (i) => `• ${i.name} (${i.weight}) x${i.quantity} — ${i.price} each`
    );
    const message = encodeURIComponent(
      `Hello Royal Sky Chips! I'd like to place an order:\n\n${orderLines.join("\n")}\n\nTotal: ₹${totalPrice}\n\nPlease confirm availability and delivery details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground">
            <ShoppingBag className="w-16 h-16 opacity-30" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm">Add some delicious chips!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-4">
              {items.map((item) => (
                <div
                  key={`${item.name}-${item.weight}`}
                  className="flex gap-3 p-3 rounded-xl bg-muted/50 border border-border"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate text-foreground">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.weight}</p>
                    <p className="text-sm font-bold text-primary mt-1">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.name, item.weight)}
                      aria-label="Remove item"
                      className="text-destructive hover:text-destructive/80 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.name, item.weight, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-border flex items-center justify-center hover:bg-border/80 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.weight, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total</span>
                <span className="text-2xl font-bold text-foreground">₹{totalPrice}</span>
              </div>
              <Button variant="whatsapp" className="w-full" size="lg" onClick={handleCheckout}>
                <MessageCircle className="w-5 h-5" />
                Checkout via WhatsApp
              </Button>
              <Button variant="outline" className="w-full" size="sm" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
