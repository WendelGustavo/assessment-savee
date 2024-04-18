var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// index.ts
var import_apollo_server2 = require("apollo-server");

// graphql/typeDefs.ts
var import_apollo_server = require("apollo-server");
var typeDefs = import_apollo_server.gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
    rating: Float
    overview: String!
    posterImage: String!
    countAverage: Int
    genresName: [String]
  }

  type Query {
    movies: [Movie]!
    movie(id: ID!): Movie
    movieByTitle(title: String!): [Movie]
  }
`;

// models/movies/index.ts
var import_axios = __toESM(require("axios"));

// util/response.ts
var url = "https://image.tmdb.org/t/p/w500";
var apiKey = "73132c33a72780334a3091bab6c9fac4";
var tradeResponseFormat = async (movie) => {
  return {
    id: movie?.id,
    title: movie?.title,
    releaseDate: movie?.release_date,
    rating: movie?.vote_average,
    overview: movie.overview,
    posterImage: movie?.poster_path ? `${url}${movie?.poster_path}?api_key=${apiKey}` : "https://media.istockphoto.com/id/1055079680/pt/vetorial/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=ZcdPIVtARno3vcyqOhPrrY5RxnzfwTb5-22Uk5khr9Y=",
    countAverage: movie?.vote_count,
    genresName: await movies_default.getGenresName(movie?.genre_ids)
  };
};
var response_default = { tradeResponseFormat };

// models/movies/index.ts
var apiUrl = "https://api.themoviedb.org/3/";
var apiKey2 = "73132c33a72780334a3091bab6c9fac4";
var getGenresName = async (movieGenres) => {
  const response = await import_axios.default.get(`${apiUrl}genre/movie/list?api_key=${apiKey2}&language=en-US`);
  const matchingGenres = response.data.genres.filter((genre) => {
    if (!movieGenres || !Array.isArray(movieGenres)) {
      return false;
    }
    return movieGenres.includes(genre.id);
  });
  const nameGenres = matchingGenres.map((genre) => genre.name);
  return nameGenres;
};
var getAllMovies = async () => {
  if (!apiUrl) {
    throw new Error("API_URL environment variable is not defined.");
  }
  const response = await import_axios.default.get(`${apiUrl}movie/popular?api_key=${apiKey2}&language=en-US`);
  const newData = await Promise.all(response?.data?.results?.map(async (movie) => {
    return await response_default.tradeResponseFormat(movie);
  }));
  return newData;
};
var getMovieById = async (id) => {
  const response = await import_axios.default.get(`${apiUrl}movie/${id}?api_key=${apiKey2}&language=en-US`);
  if (!response?.data) {
    return [];
  }
  response.data.genres_ids = response.data.genres;
  const arrayResponse = [response?.data];
  const newData = await Promise.all(arrayResponse.map(async (movie) => {
    return await response_default.tradeResponseFormat(movie);
  }));
  return newData;
};
var getMovieByTitle = async (title) => {
  const response = await import_axios.default.get(`${apiUrl}search/movie?api_key=${apiKey2}&language=en-US&query=${title}`);
  if (!response?.data?.results) {
    return [];
  }
  const newData = await Promise.all(response?.data?.results?.map(async (movie) => {
    return await response_default.tradeResponseFormat(movie);
  }));
  return newData;
};
var movies_default = {
  getAllMovies,
  getMovieById,
  getMovieByTitle,
  getGenresName
};

// graphql/resolvers.ts
var resolvers = {
  Query: {
    movies: async () => {
      return await movies_default.getAllMovies();
    },
    movie: async (_, { id }) => {
      return await movies_default.getMovieById(id);
    },
    movieByTitle: async (_, { title }) => {
      return await movies_default.getMovieByTitle(title);
    }
  }
};

// index.ts
var server = new import_apollo_server2.ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url: url2 }) => {
  console.log(`\u{1F680} Server ready at ${url2}`);
});
