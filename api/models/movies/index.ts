import axios from 'axios';
import Movie from '../../types/index';
import utilResponse from '../../util/response';


const urlGener = "https://api.themoviedb.org/3/genre/movie/list"
const apiKey = "73132c33a72780334a3091bab6c9fac4";
const apiUrl = "https://api.themoviedb.org/3/movie";
const searchUrl = "https://api.themoviedb.org/3/search/movie";


const getGenresName = async (movieGenres: number[]) : Promise<string[]> => {

    const response = await axios.get(`${urlGener}?api_key=${apiKey}&language=en-US`);

    const nameGenres = response.data.genres.filter((genre: any) => movieGenres.includes(genre.id)).map((genre: any) => genre.name);

    return nameGenres;
};



const getAllMovies = async (): Promise<Movie[]> => {
    if (!apiUrl) {
        throw new Error('API_URL environment variable is not defined.');
    }

    const response = await axios.get(`${apiUrl}/popular?api_key=${apiKey}&language=en-US`);

    const newData: Movie[] = await Promise.all(response?.data?.results?.map(async (movie: []) => {
        return await utilResponse.tradeResponseFormat(movie);
    }));

    getGenresName(response?.data?.results[0]?.genre_ids);

    return newData;
};

const getMovieById = async (id: number): Promise<Movie[]> => {

    const response = await axios.get(`${apiUrl}/${id}?api_key=${apiKey}&language=en-US`);

    const arrayResponse = [response?.data];

    const newData: Movie[] = await Promise.all(arrayResponse.map(async (movie: []) => {
        return await utilResponse.tradeResponseFormat(movie);
    }));

    return newData;
};

const getMovieByTitle = async (title: string): Promise<Movie[]> => {

    const response = await axios.get(`${searchUrl}?api_key=${apiKey}&language=en-US&query=${title}`);

    if (response?.data?.results?.length === 0) {
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