"use client";
import React from "react";
import { POPULAR_MOVIE, TOP_RANKED_MOVIE, searchUrl } from "@/api/Api";
import { MovieContextData, Movie } from "./movie/types";

export const MovieContext = React.createContext<MovieContextData>(
    {} as MovieContextData
);

export function MovieProvider({ children }: { children: React.ReactNode }) {
    const [popularMovies, setPopularMovies] = React.useState<Movie[]>([]);
    const [topRated, setTopRated] = React.useState<Movie[]>([]);
    const [search, setSearch] = React.useState<string>("");
    const [searchResult, setSearchResult] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        try {
            if (!POPULAR_MOVIE.url)
                throw new Error("POPULAR_MOVIE.url is undefined");

            fetch(POPULAR_MOVIE.url, POPULAR_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setPopularMovies(data.results);
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {
        try {
            if (!TOP_RANKED_MOVIE.url)
                throw new Error("TOP_RANKED_MOVIE.url is undefined");

            fetch(TOP_RANKED_MOVIE.url, TOP_RANKED_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setTopRated(data.results);
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {
        if (search.trim() === "") {
            setSearchResult([]);
            return;
        }

        const apiUrl = `${searchUrl}${search}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setSearchResult(data.results);
            })
            .catch((error) => {
                console.error("Erro na pesquisa:", error);
            });
    }, [search]);

    return (
        <MovieContext.Provider
            value={{ popularMovies, topRated, searchResult, setSearch, search }}
        >
            {children}
        </MovieContext.Provider>
    );
}
