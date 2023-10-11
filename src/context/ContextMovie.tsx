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
import { MovieContextData, Movie, Cast } from "./movie/types";
import { useParams } from "next/navigation";

export const apiKey =
    process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

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
    const [cast, setCast] = React.useState<Cast[]>([]);
    const [crew, setCrew] = React.useState<Cast[]>([]);
    const [characters, setCharacters] = React.useState<Cast[]>([]);
    const [directors, setDirectors] = React.useState<Cast[]>([]);
    const [screenplay, setScreenplay] = React.useState<Cast[]>([]);
    const [writer, setWriter] = React.useState<Cast[]>([]);

    const params = useParams();
    const { id } = params;

    React.useEffect(() => {
        try {
            if (!TRAILRES_MOVIE.url)
                throw new Error("TRAILRES_MOVIE.url is undefined");

            fetch(TRAILRES_MOVIE.url, TRAILRES_MOVIE.options)
                .then((response) => response.json())
                .then((data) => {
                    setTrailer(data.results);
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
                    console.log(data.results);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const fetchCast = async () => {
        try {
            fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-br;`
            )
                .then((response) => response.json())
                .then((data) => {
                    const directors = data.crew.filter(
                        (crew: { job: string }) => crew.job === "Director"
                    );

                    const screenplay = data.crew.filter(
                        (crew: { job: string }) => crew.job === "Screenplay"
                    );

                    const writer = data.crew.filter(
                        (crew: { job: string }) => crew.job === "Writer"
                    );

                    const characters = data.cast.filter(
                        (cast: { order: number }) => cast.order <= 10
                    );

                    setDirectors(directors);
                    setScreenplay(screenplay);
                    setCharacters(characters);
                    setWriter(writer);
                    setCast(data.cast);
                    setCrew(data.crew);
                    console.log(crew);
                });
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        fetchCast();
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
                cast,
                crew,
                characters,
                directors,
                screenplay,
                writer,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
}
