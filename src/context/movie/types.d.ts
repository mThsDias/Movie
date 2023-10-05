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
    genre_ids: number[];
    genres: Genre[];
    name: string;
    first_air_date: string;
    runtime: number;
}

export interface MovieContextData {
    popularMovies: Movie[];
    topRated: Movie[];
    searchResult: Movie[];
    setSearch: (search: string) => void;
    search: string;
    trending: Movie[];
    trendingWeekly: Movie[];
    trailer: Movie[];
}

interface ApiResponse<T> {
    results: T[];
}
