-- Create reviews table for customer testimonials
CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  message TEXT NOT NULL,
  approved BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read approved reviews (public facing)
CREATE POLICY "Anyone can view approved reviews"
ON public.reviews
FOR SELECT
USING (approved = true);

-- Allow anyone to submit a review (will be pending approval)
CREATE POLICY "Anyone can submit a review"
ON public.reviews
FOR INSERT
WITH CHECK (approved = false);