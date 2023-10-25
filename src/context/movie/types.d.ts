import { MovieContextData, Movie } from "./types";

export interface Movie {
  key: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  name: string;
  first_air_date: string;
  media_type: string;
}

export interface Info {
  title: string;
  runtime: number;
  genres: [
    {
      name: string;
      id: number;
    }
  ];
  homepage: string;
  tagline: string;
  status: string;
  budget: number;
  revenue: number;
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
}

export interface MovieContextData {
  popularMovies: Movie[];
  topRated: Movie[];
  searchResult: Movie[];
  setSearch: (search: string) => void;
  search: string;
  trending: Movie[];
  trendingWeekly: Movie[];
  cast: Cast[];
  crew: Cast[];
  characters: Cast[];
  directors: Cast[];
  screenplay: Cast[];
  writer: Cast[];
  creator: Cast[];
  information: Info;
}

interface ApiResponse<T> {
  results: T[];
}
