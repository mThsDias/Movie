// TvContext.tsx
export interface TvProviderProps {
  children: ReactNode;
}

export interface TvContextValue {
  tv: Tv[] | undefined;
  loading: boolean;
  error: string | null;
}

export interface Tv {
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
export interface CastTvProviderProps {
  children: ReactNode;
}

export interface CastTvContextValue {
  castTv: CastTv[] | undefined;
  loading: boolean;
  error: string | null;
}

export interface CastTv {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

// TrailerContext.tsx
export interface TrailerTvProviderProps {
  children: ReactNode;
}

export interface TrailerTvContextValue {
  trailerTv: TrailerTv | undefined;
  loading: boolean;
  error: string | null;
}

export interface TrailerTv {
  id: string;
  key: string;
  site: string;
  type: string;
}

// PopularTvContext.tsx
export interface PopularTvProviderProps {
  children: ReactNode;
}

export interface PopularTvContextValue {
  popularTv: PopularTv[] | undefined;
  loading: boolean;
  error: string | null;
}
