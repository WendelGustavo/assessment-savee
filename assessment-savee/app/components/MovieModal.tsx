import React, { useEffect, useState } from "react";
import { MovieModalProps } from "../types/movies";
import Image from "next/image";
import IconLoading from "./IconLoading";
import StarRating from "./StarRating";

/**
 * MovieModal component for displaying detailed information about a movie in a modal dialog.
 * @param title The title of the movie.
 * @param overview A brief overview of the movie.
 * @param posterImage The URL of the movie's poster image.
 * @param rating The average rating of the movie.
 * @param countAverage The number of reviews for the movie.
 * @param showModal Indicates whether the modal should be shown.
 * @param closeModal Function to close the modal.
 * @param releaseDate The release date of the movie.
 * @param genresName An array of genres associated with the movie.
 * @param loading Indicates whether the component is in a loading state.
 */
export const MovieModal: React.FC<MovieModalProps> = ({
  title,
  overview,
  posterImage,
  rating,
  countAverage,
  showModal,
  closeModal,
  releaseDate,
  genresName,
  loading,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(loading || true);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleClickOutside = (event: { target: any }) => {
    const target = event.target;
    const modalDiv = document.querySelector(".modal-div");

    if (modalDiv && !modalDiv.contains(target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      setIsLoading(loading || true);
    }
  }, [showModal, loading]);

  const openYoutubeTrailer = () => {
    const searchQuery = encodeURIComponent(`${title} trailer`);
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
    window.open(youtubeSearchUrl, "_blank");
  };

  return (
    showModal && (
      <div className="relative z-30" role="dialog" aria-modal="true">
        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4 ">
            <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
              <div className="relative flex w-full items-center overflow-hidden bg-white dark:bg-black px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded modal-div">
                <button
                  type="button"
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5 relative">
                    {isLoading && (
                      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10 flex items-center justify-center">
                        <IconLoading />
                      </div>
                    )}
                    <Image
                      src={posterImage}
                      alt="Movie poster image"
                      width={500}
                      height={750}
                      className="object-cover object-center"
                      layout="responsive"
                      onLoad={() => isLoading && setIsLoading(false)}
                    />
                  </div>

                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-bold sm:pr-12">{title}</h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        overview
                      </h3>

                      <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
                        {overview}
                      </p>

                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <StarRating rating={rating / 2} />
                          <a
                            href="#"
                            className="ml-3 text-sm font-medium text-gray-400"
                          >
                            {countAverage} reviews
                          </a>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="sr-only">Genres</h4>
                        <ul className="flex flex-wrap gap-2">
                          {genresName.map((genre: string, index: number) => (
                            <li
                              key={index}
                              className="px-2 py-1 text-sm font-medium text-gray-500  dark:text-white bg-gray-100 dark:bg-gray-600 rounded-lg"
                            >
                              {genre}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <h4 className="sr-only">Release date</h4>
                        <p className="text-sm text-gray-400">
                          Release date: {releaseDate}
                        </p>
                      </div>

                      <div className="mt-6">
                        <button
                          type="button"
                          className="w-full py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                          onClick={() => openYoutubeTrailer()}
                        >
                          Watch trailer
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
