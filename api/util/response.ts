import Movie from '../types/index';
import movieModel from '../models/movies/index';

const url = "https://image.tmdb.org/t/p/w500";
const apiKey = "73132c33a72780334a3091bab6c9fac4";

/**
 * Format the response of the API to the Movie type.
 * @param movie The movie object to be formatted.
 * @returns The formatted movie object.
 */

const tradeResponseFormat = async (movie: any): Promise<Movie> => {
    return {
        id: movie?.id,
        title: movie?.title,
        releaseDate: movie?.release_date,
        rating: movie?.vote_average,
        overview: movie.overview,
        posterImage: movie?.poster_path ? `${url}${movie?.poster_path}?api_key=${apiKey}` :
            "https://media.istockphoto.com/id/1055079680/pt/vetorial/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=ZcdPIVtARno3vcyqOhPrrY5RxnzfwTb5-22Uk5khr9Y=",
        countAverage: movie?.vote_count,
        genresName: await movieModel.getGenresName(movie?.genre_ids),
    };
};

export default { tradeResponseFormat };