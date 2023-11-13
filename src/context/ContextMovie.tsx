"use client";
import React from "react";
import {
  POPULAR_MOVIE,
  TOP_RANKED_MOVIE,
  TRENDING_MOVIE,
  TRENDING_MOVIE_WEEKLY,
} from "@/api/Api";
import { MovieContextData, Movie, Cast, Info } from "./movie/types";
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
  const [cast, setCast] = React.useState<Cast[]>([]);
  const [crew, setCrew] = React.useState<Cast[]>([]);
  const [characters, setCharacters] = React.useState<Cast[]>([]);
  const [directors, setDirectors] = React.useState<Cast[]>([]);
  const [screenplay, setScreenplay] = React.useState<Cast[]>([]);
  const [writer, setWriter] = React.useState<Cast[]>([]);
  const [creator, setCreator] = React.useState<Cast[]>([]);
  const [information, setInformation] = React.useState<Info>({} as Info);

  const params = useParams();
  const { id } = params;

  React.useEffect(() => {
    try {
      if (!POPULAR_MOVIE.url) throw new Error("POPULAR_MOVIE.url is undefined");

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
    try {
      if (!TRENDING_MOVIE.url)
        throw new Error("TRENDING_MOVIE.url is undefined");

      fetch(TRENDING_MOVIE.url, TRENDING_MOVIE.options)
        .then((response) => response.json())
        .then((data) => {
          setTrending(data.results);
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
          setTrendingWeekly(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    const movies = [...trending, ...trendingWeekly];
    const movie = movies.find((movie) => movie.id === Number(id));
    const type = movie?.media_type === "tv" ? "tv" : "movie";

    try {
      if (!id) return;
      fetch(
        `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=pt-br;`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            const directors = data.crew
              ? data.crew.filter(
                  (crew: { job: string }) => crew.job === "Director"
                )
              : [];

            const creator = data.crew
              ? data.crew.filter(
                  (crew: { job: string }) => crew.job === "Creator"
                )
              : [];

            const screenplay = data.crew
              ? data.crew.filter(
                  (crew: { job: string }) => crew.job === "Screenplay"
                )
              : [];

            const writer = data.crew
              ? data.crew.filter(
                  (crew: { job: string }) => crew.job === "Writer"
                )
              : [];

            const characters = data.cast
              ? data.cast.filter((cast: { order: number }) => cast.order <= 10)
              : [];

            setDirectors(directors);
            setScreenplay(screenplay);
            setWriter(writer);
            setCharacters(characters);
            setCreator(creator);
            setCast(data.cast);
            setCrew(data.crew);
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, [id, trending, trendingWeekly]);

  React.useEffect(() => {
    const movies = [...trending, ...trendingWeekly];
    const movie = movies.find((movie) => movie.id === Number(id));
    const type = movie?.media_type === "movie" ? "movie" : "tv";

    try {
      if (!id) return;
      fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setInformation(data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [id, trending, trendingWeekly]);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        topRated,
        setSearch,
        search,
        trending,
        trendingWeekly,
        cast,
        crew,
        characters,
        directors,
        screenplay,
        writer,
        creator,
        information,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
