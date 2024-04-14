import Image from "next/image";
import React from "react";

interface MovieCardProps {
  title: string;
  overview: string;
  posterImage: string;
  releaseDate: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  overview,
  posterImage,
  releaseDate,
}) => {
  return (
    <div>
      <div className="group relative rounded-lg shadow-md  dark:shadow-sm text-justify mb-5 dark:shadow-white">
        <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-50 sm:h-64">
          <Image
            src={posterImage}
            alt="Movie poster image"
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            layout="fill"
          />
        </div>
        <div className="p-4">
          <h3>
            <a href="#" className="text-lg font-semibold">
              {title}
            </a>
          </h3>
          <p className="text-sm mt-2">{overview}</p>
          <p className="text-sm mt-4 text-gray-400 text-right">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
