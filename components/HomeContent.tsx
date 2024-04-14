import React from "react";
import MovieCard, { MovieCardProps }  from "./MovieCard";

const callouts = [
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
  {
    title: "Example for a collection",
    overview: "This is an example for a collection. One very long sentence that should be cut off at some point. This is an example for a collection.",
    posterImage:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    releaseDate: "2021-09-01",
  },
];

const HomeContent = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold">Top movies</h2>
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout: MovieCardProps, index: number) => (
            <MovieCard
              key={index}
              title={callout.title}
              overview={callout.overview}
              posterImage={callout.posterImage}
              releaseDate={callout.releaseDate}
              loading={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
