import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Review {
  id: string;
  name: string;
  rating: number;
  message: string;
  created_at: string;
}

export interface NewReview {
  name: string;
  rating: number;
  message: string;
}

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const fetchReviews = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, rating, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching reviews:", error);
    } else {
      setReviews(data || []);
    }
    setIsLoading(false);
  };

  const submitReview = async (review: NewReview): Promise<boolean> => {
    setIsSubmitting(true);
    
    const { error } = await supabase.from("reviews").insert({
      name: review.name.trim(),
      rating: review.rating,
      message: review.message.trim(),
      approved: false,
    });

    setIsSubmitting(false);

    if (error) {
      console.error("Error submitting review:", error);
      toast({
        title: "Error",
        description: "Failed to submit your review. Please try again.",
        variant: "destructive",
      });
      return false;
    }

    toast({
      title: "Thank you! 🎉",
      description: "Your review has been submitted and is pending approval.",
    });
    return true;
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return {
    reviews,
    isLoading,
    isSubmitting,
    submitReview,
    refreshReviews: fetchReviews,
  };
}
