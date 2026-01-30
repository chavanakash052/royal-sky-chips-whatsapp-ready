import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { useReviews } from "@/hooks/useReviews";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import { Skeleton } from "@/components/ui/skeleton";

const trustBadges = [
  { label: "Fresh Batch Daily", icon: "🌿" },
  { label: "Trusted Local Brand", icon: "⭐" },
  { label: "Quality Checked", icon: "✓" },
];

const ReviewsSection = () => {
  const { reviews, isLoading, isSubmitting, submitReview } = useReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Reviews Display - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-card rounded-2xl p-6 shadow-lg">
                    <Skeleton className="h-8 w-8 mb-4" />
                    <Skeleton className="h-4 w-24 mb-4" />
                    <Skeleton className="h-20 w-full mb-6" />
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            ) : reviews.length > 0 ? (
              <>
                {/* Grid View for Desktop */}
                <div className="hidden md:grid md:grid-cols-2 gap-6">
                  {reviews.slice(0, 4).map((review) => (
                    <ReviewCard
                      key={review.id}
                      name={review.name}
                      rating={review.rating}
                      message={review.message}
                      createdAt={review.created_at}
                    />
                  ))}
                </div>

                {/* Carousel for Mobile */}
                <div className="md:hidden relative">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-500"
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
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center hover:bg-muted transition-colors"
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
              </>
            ) : (
              <div className="bg-card rounded-2xl p-8 text-center shadow-lg">
                <MessageSquare className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Be the first to share your experience with our banana chips!
                </p>
              </div>
            )}
          </div>

          {/* Review Form - Takes 1 column */}
          <div className="lg:col-span-1">
            <ReviewForm onSubmit={submitReview} isSubmitting={isSubmitting} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
