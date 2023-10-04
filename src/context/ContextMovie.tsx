"use client";
import React from "react";
import {
    POPULAR_MOVIE,
    TOP_RANKED_MOVIE,
    searchUrl,
    TRENDING_MOVIE,
    TRENDING_MOVIE_WEEKLY,
    TRAILRES_MOVIE,
} from "@/api/Api";
import { MovieContextData, Movie } from "./movie/types";

export const MovieContext = React.createContext<MovieContextData>(
    {} as MovieContextData
);

export function MovieProvider({ children }: { children: React.ReactNode }) {
    const [popularMovies, setPopularMovies] = React.useState<Movie[]>([]);
    const [topRated, setTopRated] = React.useState<Movie[]>([]);
    const [trending, setTrending] = React.useState<Movie[]>([]);
    const [trendingWeekly, setTrendingWeekly] = React.useState<Movie[]>([]);
    const [search, setSearch] = React.useState<string>("");
    const [searchResult, setSearchResult] = React.useState<Movie[]>([]);
    const [trailer, setTrailer] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        try {
            if (!TRAILRES_MOVIE.url)
                throw new Error("TRAILRES_MOVIE.url is undefined");

            fetch(TRAILRES_MOVIE.url, TRAILRES_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setTrailer(data.results);
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {
        try {
            if (!POPULAR_MOVIE.url)
                throw new Error("POPULAR_MOVIE.url is undefined");

            fetch(POPULAR_MOVIE.url, POPULAR_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setPopularMovies(data.results);
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

    React.useEffect(() => {
        try {
            if (!TRENDING_MOVIE.url)
                throw new Error("TRENDING_MOVIE.url is undefined");

            fetch(TRENDING_MOVIE.url, TRENDING_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setTrendingWeekly(data.results);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    React.useEffect(() => {
        try {
            if (!TRENDING_MOVIE_WEEKLY.url)
                throw new Error("TRENDING_MOVIE.url is undefined");

            fetch(TRENDING_MOVIE_WEEKLY.url, TRENDING_MOVIE_WEEKLY.options)
                .then((response) => response.json())
                .then((data) => {
                    setTrending(data.results);
                    console.log(data);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <MovieContext.Provider
            value={{
                popularMovies,
                topRated,
                searchResult,
                setSearch,
                search,
                trending,
                trendingWeekly,
                trailer,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}
