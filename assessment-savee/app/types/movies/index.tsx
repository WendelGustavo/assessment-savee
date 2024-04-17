export interface Movie {
  id: number;
  title: string;
  releaseDate: string;
  rating: number;
  overview: string;
  posterImage: string;
  countAverage: number;
  genresName: string[];
}

export interface MovieCardProps {
  id(id: any): unknown;
  title: string;
  overview: string;
  posterImage: string;
  releaseDate: string;
  loading?: boolean;
}

export interface MovieModalProps {
  title: string;
  overview: string;
  posterImage: string;
  showModal: boolean;
  rating: number;
  countAverage: number;
  releaseDate: string;
  closeModal: () => void;
  genresName: string[];
  loading?: boolean;
}

export interface MoviesNotFoundProps {
  movie: string;
}

