import Movies from '../models/movies';
import Movie from '../types/index';

describe('Movie Tests Controller', () => {
    test('Get all movies', async () => {
        const movies: Movie[] = await Movies.getAllMovies();
        expect(movies.length).toBeGreaterThan(0);

        expect(movies).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    title: expect.any(String),
                    releaseDate: expect.any(String),
                    rating: expect.any(Number),
                    overview: expect.any(String),
                    posterImage: expect.any(String),
                    countAverage: expect.any(Number),
                    genresName: expect.any(Array),
                }),
            ]),
        );
    });

    test('Get movie by ID', async () => {
        const movies: Movie[] = await Movies.getMovieById(1011985);

        expect(movies.length).toBeGreaterThan(0);

        expect(movies).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    title: expect.any(String),
                    releaseDate: expect.any(String),
                    rating: expect.any(Number),
                    overview: expect.any(String),
                    posterImage: expect.any(String),
                    countAverage: expect.any(Number),
                    genresName: expect.any(Array),
                }),
            ]),
        );
    })

    test('Get movie by title', async () => {
        const movies: Movie[] = await Movies.getMovieByTitle('The Godfather');

        expect(movies.length).toBeGreaterThan(0);

        expect(movies).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    title: expect.any(String),
                    releaseDate: expect.any(String),
                    rating: expect.any(Number),
                    overview: expect.any(String),
                    posterImage: expect.any(String),
                    countAverage: expect.any(Number),
                    genresName: expect.any(Array),
                }),
            ]),
        );
    })

    test('Data not found', async () => {
        const movies: Movie[] = await Movies.getMovieByTitle('dawdawdwadawdawdaw');

        expect(movies.length).toBe(0);

        expect(movies).toEqual([]);
    })

});
