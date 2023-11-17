import { MovieContextData, Movie } from "./types";

export interface Movie {
  key: string;
  id: number;
  name: string;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  first_air_date: string;
  genres: Genre[{
    id: number;
    name: string;
  }];
  runtime: number;
  homepage: string;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
  media_type: string;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface MovieContextData {
  trending: Movie[];
  trendingWeekly: Movie[];
  cast: Cast[];
  crew: Cast[];
  characters: Cast[];
  directors: Cast[];
  screenplay: Cast[];
  writer: Cast[];
  creator: Cast[];
  setSearch: (search: string) => void;
  search: string;
  ListTv: Movie[];
  ListMovie: Movie[];
}

interface ApiResponse<T> {
  results: T[];
}
