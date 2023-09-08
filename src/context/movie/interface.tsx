export interface Movie {
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}

export interface MovieContextData {
    movies: Movie[];
}
