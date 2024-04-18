import axios from 'axios';
import Movie from '../../types/index';
import utilResponse from '../../util/response';


const apiUrl = "https://api.themoviedb.org/3/";
const apiKey = "73132c33a72780334a3091bab6c9fac4";

/**
  *Get the genres name of a movie.
  *@param movieGenres The genres of the movie.
  *@returns The genres name of the movie.
 */
const getGenresName = async (movieGenres: number[]) : Promise<string[]> => {

    const response = await axios.get(`${apiUrl}genre/movie/list?api_key=${apiKey}&language=en-US`);

    const matchingGenres = response.data.genres.filter((genre: any) => {
        if (!movieGenres || !Array.isArray(movieGenres)) {
            return false;
        }
        return movieGenres.includes(genre.id);
    });

    const nameGenres: string[] = matchingGenres.map((genre: any) => genre.name);

    return nameGenres;
};

/**
 * Get all movies from the API.
 * @returns The list of movies.
 */
const getAllMovies = async (): Promise<Movie[]> => {
    if (!apiUrl) {
        throw new Error('API_URL environment variable is not defined.');
    }

    const response = await axios.get(`${apiUrl}movie/popular?api_key=${apiKey}&language=en-US`);

    const newData: Movie[] = await Promise.all(response?.data?.results?.map(async (movie: []) => {
        return await utilResponse.tradeResponseFormat(movie);
    }));

    return newData;
};

/**
 *Get a movie by its ID.
 *@param id The ID of the movie.
 *@returns The movie with the given ID.
 */
const getMovieById = async (id: number): Promise<Movie[]> => {

    const response = await axios.get(`${apiUrl}movie/${id}?api_key=${apiKey}&language=en-US`);

    if (!response?.data) {
        return [];
    }

    response.data.genres_ids = response.data.genres;

    const arrayResponse = [response?.data];

    

    const newData: Movie[] = await Promise.all(arrayResponse.map(async (movie: []) => {
        return await utilResponse.tradeResponseFormat(movie);
    }));


    return newData;
};

/**
 *Get a movie by its title.
 *@param title The title of the movie.
 *@returns The movie with the given title.
 */
const getMovieByTitle = async (title: string): Promise<Movie[]> => {

    const response = await axios.get(`${apiUrl}search/movie?api_key=${apiKey}&language=en-US&query=${title}`);

    if (!response?.data?.results) {
        return [];
    }

    const newData: Movie[] = await Promise.all(response?.data?.results?.map(async (movie: []) => {
        return await utilResponse.tradeResponseFormat(movie);
    }));

    return newData;

};

export default {
    getAllMovies,
    getMovieById,
    getMovieByTitle,
    getGenresName,
};