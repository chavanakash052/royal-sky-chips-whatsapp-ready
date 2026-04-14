import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  name: string;
  weight: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (name: string, weight: string) => void;
  updateQuantity: (name: string, weight: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const parsePrice = (price: string) => parseInt(price.replace(/[^\d]/g, ""), 10) || 0;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.name === item.name && i.weight === item.weight);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name && i.weight === item.weight
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (name: string, weight: string) => {
    setItems((prev) => prev.filter((i) => !(i.name === name && i.weight === weight)));
  };

  const updateQuantity = (name: string, weight: string, quantity: number) => {
    if (quantity <= 0) return removeItem(name, weight);
    setItems((prev) =>
      prev.map((i) => (i.name === name && i.weight === weight ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isOpen, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
