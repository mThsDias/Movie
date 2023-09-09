"use client";
import React from "react";
import { POPULAR_MOVIE } from "@/api/Api";
import { MovieContextData, Movie } from "./movie/interface";

export const MovieContext = React.createContext<MovieContextData>(
    {} as MovieContextData
);

export function MovieProvider({ children }: { children: React.ReactNode }) {
    const [movies, setMovies] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        try {
            if (!POPULAR_MOVIE.url)
                throw new Error("POPULAR_MOVIE.url is undefined");

            fetch(POPULAR_MOVIE.url, POPULAR_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setMovies(data.results);
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <MovieContext.Provider value={{ movies }}>
            {children}
        </MovieContext.Provider>
    );
}
