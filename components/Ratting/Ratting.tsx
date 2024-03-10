"use client";

import RatingFill from "@/json/icons/RatingFill";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface StarRatingProps {
  totalStars: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, className }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (starIndex: number): void => {
    setRating(starIndex + 1);
  };

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            cursor: "pointer",
          }}
        >
          {index <= rating ? (
            <RatingFill fill={"rgba(255, 191, 71, 1)"} />
          ) : (
            <RatingFill fill={"transparent"} />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
