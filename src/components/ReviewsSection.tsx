import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Saurabh Chavan",
    location: "Karad",
    rating: 5,
    review: "Best banana chips I've ever tasted! The masala flavor is absolutely addictive. My whole family loves it.",
    avatar: "PS",
  },
  {
    name: "Pradip Pawar",
    location: "Vadoli Nileshwar",
    rating: 5,
    review: "Fresh, crispy, and delivered quickly. The coconut oil chips remind me of Kerala. Will order again!",
    avatar: "RK",
  },
  {
    name: "Akash Chavan",
    location: "Koparde Haveli",
    rating: 5,
    review: "Perfect snack for my kids. No preservatives and tastes amazing. Thank you Royal Sky Chips!",
    avatar: "AC",
  },
  {
    name: "Vikram Patil",
    location: "Karad",
    rating: 5,
    review: "Ordered for a party and everyone loved it! The jaggery chips are unique and delicious.",
    avatar: "VP",
  },
  {
    name: "Akshay Chavan",
    location: "Koparde Haveli",
    rating: 5,
    review: "Authentic taste that brings back childhood memories. Quality packaging and quick delivery!",
    avatar: "AC",
  },
];

const trustBadges = [
  { label: "Fresh Batch Daily", icon: "🌿" },
  { label: "Trusted Local Brand", icon: "⭐" },
  { label: "Quality Checked", icon: "✓" },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-card px-5 py-3 rounded-full shadow-sm"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who love our banana chips.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
                    <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" />
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-lg text-foreground mb-6 italic">
                      "{review.review}"
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-semibold text-primary">{review.avatar}</span>
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
