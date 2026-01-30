import { Star, Quote } from "lucide-react";
import { format } from "date-fns";

interface ReviewCardProps {
  name: string;
  rating: number;
  message: string;
  createdAt: string;
}

const ReviewCard = ({ name, rating, message, createdAt }: ReviewCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const formattedDate = format(new Date(createdAt), "MMM d, yyyy");

  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 transition-colors" />
      
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-primary text-primary" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>

      <p className="text-foreground mb-6 line-clamp-4 italic">"{message}"</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <span className="font-semibold text-primary text-sm">{initials}</span>
          </div>
          <span className="font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{formattedDate}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
