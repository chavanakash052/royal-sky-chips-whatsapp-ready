import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface ReviewFormProps {
  onSubmit: (review: { name: string; rating: number; message: string }) => Promise<boolean>;
  isSubmitting: boolean;
}

const ReviewForm = ({ onSubmit, isSubmitting }: ReviewFormProps) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; rating?: string; message?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }
    
    if (rating === 0) {
      newErrors.rating = "Please select a rating";
    }
    
    if (!message.trim()) {
      newErrors.message = "Please write your review";
    } else if (message.trim().length > 500) {
      newErrors.message = "Review must be less than 500 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    const success = await onSubmit({ name: name.trim(), rating, message: message.trim() });
    
    if (success) {
      setName("");
      setRating(0);
      setMessage("");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
        Leave a Review
      </h3>
      
      <div className="space-y-5">
        {/* Name Input */}
        <div>
          <Label htmlFor="name" className="text-foreground">Your Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={cn("mt-1.5", errors.name && "border-destructive")}
            maxLength={100}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name}</p>
          )}
        </div>

        {/* Star Rating */}
        <div>
          <Label className="text-foreground">Your Rating</Label>
          <div className="flex gap-1 mt-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary rounded"
              >
                <Star
                  className={cn(
                    "w-7 h-7 transition-colors",
                    (hoverRating || rating) >= star
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  )}
                />
              </button>
            ))}
          </div>
          {errors.rating && (
            <p className="text-sm text-destructive mt-1">{errors.rating}</p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <Label htmlFor="message" className="text-foreground">Your Review</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your experience with our banana chips..."
            className={cn("mt-1.5 min-h-[100px]", errors.message && "border-destructive")}
            maxLength={500}
          />
          <div className="flex justify-between mt-1">
            {errors.message ? (
              <p className="text-sm text-destructive">{errors.message}</p>
            ) : (
              <span />
            )}
            <span className="text-xs text-muted-foreground">{message.length}/500</span>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin">⏳</span>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Review
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ReviewForm;
