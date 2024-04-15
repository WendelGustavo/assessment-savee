"use client";
import Image from "next/image";
import React, { useState } from "react";
import IconLoading from "./IconLoading";
import MovieCardProps  from "../types/movies/MovieCardType";

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  overview,
  posterImage,
  releaseDate,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(loading || false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div>
      <div className="group relative rounded-lg shadow-md  dark:shadow-sm text-justify mb-5 dark:shadow-white">
        <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-50 sm:h-64">
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
              <IconLoading />
            </div>
          )}
          <Image
            src={!isError ? posterImage : "https://media.istockphoto.com/id/1055079680/pt/vetorial/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=ZcdPIVtARno3vcyqOhPrrY5RxnzfwTb5-22Uk5khr9Y=" }
            alt="Movie poster image"
            className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            onLoad={() => isLoading && setIsLoading(false)}
            onError={() => {
              setIsError(true);
              setIsLoading(false);
            }}
            width={50}
            height={50}
            layout="responsive"
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
