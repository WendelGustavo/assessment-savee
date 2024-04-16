export default interface Movie {
    id: number;
    title: string;
    releaseDate: string;
    rating: number;
    overview: string;
    posterImage: string;
    countAverage: number;
    genresName: string[];
};