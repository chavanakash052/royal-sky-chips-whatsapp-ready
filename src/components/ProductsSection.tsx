import ProductCard from "@/components/ProductCard";
import productClassic from "@/assets/product-classic.png";
import productMasala from "@/assets/product-masala.jpg";
import productLongSalted from "@/assets/product-long-salted.png";
import productLongMasala from "@/assets/product-long-masala.png";

const products = [
  {
    name: "Classic Salted Banana Chips",
    description: "Traditional salted chips with the perfect crunch. A timeless favorite.",
    image: productClassic,
    prices: [
      { weight: "100g", price: "₹49" },
      { weight: "250g", price: "₹99" },
      { weight: "500g", price: "₹179" },
      { weight: "1 Kg", price: "₹349" },
    ],
    isFresh: true,
  },
  {
    name: "Spicy Masala Banana Chips",
    description: "Bold Indian spices meet crispy banana chips. For spice lovers.",
    image: productMasala,
    prices: [
      { weight: "100g", price: "₹59" },
      { weight: "250g", price: "₹119" },
      { weight: "500g", price: "₹199" },
      { weight: "1 Kg", price: "₹359" },
    ],
    isFresh: true,
  },
  {
    name: "Long Salted Banana Chips",
    description: "Elongated crispy banana chips with classic salt seasoning. Extra crunch in every bite.",
    image: productLongSalted,
    prices: [
      { weight: "100g", price: "₹49" },
      { weight: "250g", price: "₹99" },
      { weight: "500g", price: "₹179" },
      { weight: "1 Kg", price: "₹349" },
    ],
    isFresh: true,
  },
  {
    name: "Long Spicy Masala Banana Chips",
    description: "Elongated banana chips with bold masala spices. A fiery twist on the classic.",
    image: productLongMasala,
    prices: [
      { weight: "100g", price: "₹59" },
      { weight: "250g", price: "₹119" },
      { weight: "500g", price: "₹199" },
      { weight: "1 Kg", price: "₹359" },
    ],
    isFresh: true,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Delicious Banana Chips Collection
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our range of handcrafted banana chips, made with love and tradition.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* Bulk Order CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for bulk orders or wholesale pricing?
          </p>
          <a
            href={`https://wa.me/917620404725?text=${encodeURIComponent(
              "Hello Royal Sky Chips, I am interested in bulk/wholesale orders. Please share details."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contact us for Bulk Orders →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
