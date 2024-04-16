"use client";
import { StartProps } from "../types/start";
const StarRating = ({ rating }: StartProps) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        return (
          <span key={index} className="cursor-pointer text-yellow-400">
            {index < rating ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
