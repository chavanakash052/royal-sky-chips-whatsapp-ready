import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import ReviewCard from "./ReviewCard";

const trustBadges = [
  { label: "Fresh Batch Daily", icon: "🌿" },
  { label: "Trusted Local Brand", icon: "⭐" },
  { label: "Quality Checked", icon: "✓" },
];

const staticReviews = [
  {
    id: "1",
    name: "Saurabh Chavan",
    rating: 5,
    message: "Best banana chips I've ever tasted! The masala flavor is perfectly balanced. My whole family loves them. Will definitely order again!",
    created_at: "2025-12-15T10:30:00Z",
  },
  {
    id: "2",
    name: "Pradip Pawar",
    rating: 5,
    message: "Excellent quality and freshness. You can tell these are made with care. The classic salted chips remind me of homemade ones!",
    created_at: "2025-12-20T14:45:00Z",
  },
  {
    id: "3",
    name: "Akash Chavan",
    rating: 5,
    message: "Ordered for a family gathering and everyone loved them! Great taste and the packaging was perfect. Highly recommended!",
    created_at: "2026-01-02T09:15:00Z",
  },
  {
    id: "4",
    name: "Rutvik Desai",
    rating: 5,
    message: "The jaggery-coated chips are amazing! Sweet and crispy, perfect with evening tea. Already placed my second order!",
    created_at: "2026-01-10T16:20:00Z",
  },
  {
    id: "5",
    name: "Akshay Chavan",
    rating: 5,
    message: "Fresh, crispy, and delicious! The coconut flavor is unique and tasty. Best local banana chips in Karad!",
    created_at: "2026-01-25T11:00:00Z",
  },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const reviews = staticReviews;

  useEffect(() => {
    if (!isAutoPlaying || reviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-muted/50">
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

        <div className="max-w-4xl mx-auto">
          {/* Reviews Display */}
          <div>
            {reviews.length > 0 ? (
              <div className="relative">
                {/* Single Card Carousel */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  >
                    {reviews.map((review) => (
                      <div key={review.id} className="w-full flex-shrink-0 px-2">
                        <ReviewCard
                          name={review.name}
                          rating={review.rating}
                          message={review.message}
                          createdAt={review.created_at}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors z-10"
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
            ) : (
              <div className="bg-card rounded-2xl p-8 text-center shadow-lg">
                <MessageSquare className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Be the first to share your experience with our banana chips!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
