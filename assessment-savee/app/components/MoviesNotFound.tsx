import React from "react"
import { MoviesNotFoundProps } from "../types/movies"

/**
 * MoviesNotFound component for displaying a message when a movie is not found.
 * @param movie The title of the movie that was not found.
 */
  
const MoviesNotFound = ({ movie }: MoviesNotFoundProps) => {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <div className="flex flex-col items-center mx-auto">
        <h1 className="text-lg font-bold text-center text-gray-700 dark:text-white">
          Sorry, the movie &quot;{movie}&quot; was not found.
        </h1>
      </div>
    </div>
  );
};

export default MoviesNotFound;
