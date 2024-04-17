"use client";
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MovieModalProps, Movie } from "../types/movies";
import clientConnection from "../services/apolloConfig";
import { gql } from "@apollo/client";
import LoadingCard from "./LoadingCard";
import MoviesNotFound from "./MoviesNotFound";
import { MovieModal } from "./MovieModal";

const HomeContent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<MovieModalProps | null>(
    null
  );
  const typingTimer = useRef<NodeJS.Timeout | null>(null);

  const openModal = (index: number) => {
    setSelectedMovie({ ...movies[index], showModal: true, closeModal });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (Movie: string) => {
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }

    setSearchValue(Movie);

    typingTimer.current = setTimeout(() => requestMovies(Movie), 1500);
  };

  /**
   * Function to make a request for movies from the API.
   * @param NameParam The name parameter to be used in the query. If provided, it fetches a specific movie; otherwise, it returns a list of movies.
   * @returns A Promise that resolves when the request is completed.
   */
  const requestMovies = async (NameParam: string): Promise<void> => {
    setMovies([]);
    setIsLoading(true);
    const { data } = await clientConnection.query({
      query: gql`query ${
        NameParam
          ? `($title: String!) {
        movieByTitle (title: $title)`
          : "{ movies "
      } {
        title
        overview
        posterImage
        releaseDate
        rating
        genresName
        countAverage
      }
    }`,
      variables: NameParam ? { title: NameParam } : {},
    });

    setMovies(NameParam ? data.movieByTitle : data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    requestMovies(searchValue);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-6 pt-6">
      {showModal && (
        <MovieModal
          title={selectedMovie ? selectedMovie?.title : ""}
          overview={selectedMovie ? selectedMovie?.overview : ""}
          posterImage={selectedMovie ? selectedMovie?.posterImage : ""}
          rating={selectedMovie ? selectedMovie?.rating : 0}
          countAverage={selectedMovie ? selectedMovie?.countAverage : 0}
          showModal={showModal}
          releaseDate={selectedMovie ? selectedMovie?.releaseDate : ""}
          closeModal={closeModal}
          genresName={selectedMovie ? selectedMovie?.genresName : []}
          loading={true}
        />
      )}
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className="grid grid-cols-2 gap-y-6">
          <h2 className="text-2xl font-bold">Top movies</h2>

          <form className="flex justify-end">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-black dark:text-white">
                <svg
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M326.1 160l127.4-127.4C451.7 32.39 449.9 32 448 32h-86.06l-128 128H326.1zM166.1 160l128-128H201.9l-128 128H166.1zM497.7 56.19L393.9 160H512V96C512 80.87 506.5 67.15 497.7 56.19zM134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0V416z" />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 bg-white dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search movie name..."
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleInputChange(e.target.value);
                }}
                required
              />
            </div>
            <button
              className="p-2.5 ms-2 text-sm font-medium border rounded-lg dark:border-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
              onClick={() => requestMovies(searchValue)}
              type="button"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        {searchValue && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Showing results for:{" "} 
            <span className="font-medium">{searchValue}</span>

            <span>
              <button className="ml-2 font-bold text-red-500 dark:text-red-400" onClick={() => handleInputChange("")}>
                X
              </button>
              
            </span>
          </p>
        )}

        {movies.length === 0 && !isLoading && searchValue && (
          <MoviesNotFound movie={searchValue} />
        )}
        <div className="mt-6 grid grid-cols-1 space-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6 md:space-y-0 lg:gap-x-6 lg:space-y-0 mb-6">
          {isLoading &&
            movies.length === 0 &&
            Array.from({ length: 20 }).map((_: any, index: number) => (
              <div key={index} className="grid grid-cols-1 gap-y-6 p-2">
                {isLoading && movies.length === 0 && <LoadingCard />}
              </div>
            ))}
          {movies.map((movie: Movie, index: number) => (
            <div key={index} onClick={() => openModal(index)}>
              <MovieCard
                id={() => movie?.id}
                title={movie?.title || ""}
                overview={movie?.overview || ""}
                posterImage={movie?.posterImage || ""}
                releaseDate={movie?.releaseDate || ""}
                loading={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
