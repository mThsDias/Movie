export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}

export interface MovieContextData {
    popularMovies: Movie[];
    topRated: Movie[];
}
