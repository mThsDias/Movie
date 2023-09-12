export interface Movie {
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
}

export interface MovieContextData {
    popularMovies: Movie[];
    topRated: Movie[];
}
