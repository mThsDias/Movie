// MovieContext.tsx
export interface MovieProviderProps {
  children: ReactNode;
}

export interface MovieContextValue {
  movie: Movie[] | undefined;
  loading: boolean;
  error: string | null;
}

export interface Movie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  first_air_date: string;
  tagline: string;
  genres: Genres[];
  runtime: number;
  budget: number;
  revenue: number;
  production_companies: ProductionCompanies[];
  homepage: string;
  status: string;
}

export interface ProductionCompanies {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface Genres {
  id: number;
  name: string;
}

// CastContext.tsx
export interface CastProviderProps {
  children: ReactNode;
}

export interface CastContextValue {
  cast: Cast[] | undefined;
  loading: boolean;
  error: string | null;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

// TrailerContext.tsx
export interface TrailerProviderProps {
  children: ReactNode;
}

export interface TrailerContextValue {
  trailer: Trailer | undefined;
  loading: boolean;
  error: string | null;
}

export interface Trailer {
  id: string;
  key: string;
  site: string;
  type: string;
}
