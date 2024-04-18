import Movies from '../models/movies';
import Movie from '../types/index';

/**
 * Resolvers for the GraphQL schema.
 */
export const resolvers = {
    Query: {
        movies: async () : Promise<Movie[]> => {
            return await Movies.getAllMovies();
        },
        movie: async (_: any, { id }: { id: number }): Promise<Movie[]> => {
            return await Movies.getMovieById(id);
        },
        movieByTitle: async (_: any, { title }: { title: string }): Promise<Movie[]> => {
            return await Movies.getMovieByTitle(title);
        },
    },
};