
import { render } from '@testing-library/react';
import { Footer } from '../components/Footer';
import { Movie, MovieCardProps, MovieModalProps, MoviesNotFoundProps } from '../types/movies';
import { StartProps } from '../types/star';

describe('Test HomeContent', () => {

  test('Show a Footer Component', async () => {
    render(Footer());

    const title = document.querySelector('footer');

    expect(title && title.textContent).toBe('© 2024 Wendel. All Rights Reserved.');
  });

  test('Movie type', async () => {
    const movie: Movie = {
      id: 1,
      title: 'Movie Title',
      releaseDate: '2024-01-01',
      rating: 5,
      overview: 'Movie Overview',
      posterImage: 'movie-poster.jpg',
      countAverage: 5,
      genresName: ['Action', 'Adventure']
    };

    expect(movie.title).toBe('Movie Title');
    expect(movie.genresName).toContain('Action');
  });

  test('MovieCardProps type', async () => {
    const movieCardProps: MovieCardProps = {
      id: (id: any) => id,
      title: 'Movie Title',
      overview: 'Movie Overview',
      posterImage: 'movie-poster.jpg',
      releaseDate: '2024-01-01'
    };

    expect(movieCardProps.title).toBe('Movie Title');
    expect(movieCardProps.id(1)).toBe(1);
  });

  test('MovieModalProps type', async () => {
    const movieModalProps: MovieModalProps = {
      title: 'Movie Title',
      overview: 'Movie Overview',
      posterImage: 'movie-poster.jpg',
      showModal: true,
      rating: 5,
      countAverage: 5,
      releaseDate: '2024-01-01',
      genresName: ['Action', 'Adventure'],
      closeModal: () => {}
    };

    expect(movieModalProps.title).toBe('Movie Title');
    expect(movieModalProps.genresName).toContain('Action');
  });

  test('MoviesNotFoundProps type', async () => {
    const moviesNotFoundProps: MoviesNotFoundProps = {
      movie: 'Movie Title'
    };

    expect(moviesNotFoundProps.movie).toBe('Movie Title');
  });

  test('StartProps type', async () => {
    const startProps: StartProps = {
      rating: 3.5
    };

    expect(startProps.rating).toBe(3.5);
  });
});
