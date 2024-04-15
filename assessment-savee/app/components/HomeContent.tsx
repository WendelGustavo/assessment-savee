"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieCardProps from "../types/movies/MovieCardType";
import clientConnection from "../services/apolloConfig";
import { gql } from "@apollo/client";
import LoadingCard from "./LoadingCard";
import MoviesNotFound from "./MoviesNotFound";

const HomeContent = () => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  let typingTimer: NodeJS.Timeout;

  const handleInputChange = (Movie: string) => {
    clearTimeout(typingTimer);

    setSearchValue(Movie);

    typingTimer = setTimeout(() => requestMovies(Movie), 700);
  };

  const requestMovies = async (NameParam: string) => {
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
                className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search movie name..."
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleInputChange(e.target.value);
                }}
                required
              />
            </div>
            <button
              className="p-2.5 ms-2 text-sm font-medium border rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
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
        {movies.length === 0 && !isLoading && searchValue && (
          <MoviesNotFound movie={searchValue} />
        )}
        <div className="mt-6 grid grid-cols-1 space-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-6 md:space-y-0 lg:gap-x-6 lg:space-y-0">
          {isLoading &&
            movies.length === 0 &&
            Array.from({ length: 20 }).map((_: any, index: number) => (
              <div key={index} className="grid grid-cols-1 gap-y-6 p-2">
                {isLoading && movies.length === 0 && <LoadingCard />}
              </div>
            ))}
          {movies.map((movie: MovieCardProps, index: number) => (
            <MovieCard
              key={index}
              title={movie.title}
              overview={movie.overview}
              posterImage={movie.posterImage}
              releaseDate={movie.releaseDate}
              loading={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
