import Image from "next/image";
import React, { useEffect, useState } from "react";
import IconLoading from "./IconLoading";
import { MovieCardProps } from "../types/movies";

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  overview,
  posterImage,
  releaseDate,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(loading || true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(loading || true);
    setIsError(false);
  }, [title, overview, posterImage, releaseDate, loading]);

  return (
    <div className="group relative rounded-lg shadow-md text-justify mb-5 dark:border dark:border-gray-600 cursor-pointer h-[50vh]">
      <div className="relative w-full overflow-hidden rounded-t-lg h-[55%]">
        {isLoading && (
          <div className="absolute inset-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
            <IconLoading />
          </div>
        )}
        <Image
          src={
            !isError
              ? posterImage
              : "https://media.istockphoto.com/id/1055079680/pt/vetorial/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=ZcdPIVtARno3vcyqOhPrrY5RxnzfwTb5-22Uk5khr9Y="
          }
          alt="Movie poster image"
          width={500}
          height={750}
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsError(true);
            setIsLoading(false);
          }}
        />
      </div>
      <div className="p-4 h-[40%]">
        <h3>
          <a href="#" className="text-lg font-semibold">
            {title}
          </a>
        </h3>
        <p className="text-sm mt-2">
          {overview.substring(0, 115) + "..." || "No overview available"}
        </p>
      </div>
      <div className="position-absolute bottom-15 w-full h-[5%] pr-4">
        <p className="text-sm text-gray-400 text-right">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
