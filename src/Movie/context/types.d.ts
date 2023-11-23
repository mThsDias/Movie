export interface MovieProviderProps {
  children: ReactNode;
}

export interface MovieContextValue {
  movie: Movie[];
  loading: boolean;
  error: string | null;
}

export interface Movie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  first_air_date: string;
  genres: Genres[];
  runtime: number;
}

interface Genres {
  id: number;
  name: string;
}
