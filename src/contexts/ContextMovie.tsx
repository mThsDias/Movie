"use client";

import React from "react";
import { MovieContextData, Movie, Cast } from "./movie/types";
import { useParams } from "next/navigation";

export const apiKey =
  process.env.REACT_APP_API_KEY || "dcf6fe444e49bcbe4d8f215076000be9";

export const MovieContext = React.createContext<MovieContextData>(
  {} as MovieContextData
);

export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [trending, setTrending] = React.useState<Movie[]>([]);
  const [trendingWeekly, setTrendingWeekly] = React.useState<Movie[]>([]);
  const [cast, setCast] = React.useState<Cast[]>([]);
  const [crew, setCrew] = React.useState<Cast[]>([]);
  const [characters, setCharacters] = React.useState<Cast[]>([]);
  const [directors, setDirectors] = React.useState<Cast[]>([]);
  const [screenplay, setScreenplay] = React.useState<Cast[]>([]);
  const [writer, setWriter] = React.useState<Cast[]>([]);
  const [creator, setCreator] = React.useState<Cast[]>([]);
  const [search, setSearch] = React.useState<string>("");
  const [ListMovie, setListMovie] = React.useState<Movie[]>([]);

  const params = useParams();
  const { id } = params;

  // useEffect para obter informações sobre um filme
  React.useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-br`
        );
        const data = await response.json();
        // Faça algo com os dados do filme
        setListMovie([data]);
        console.log({ data });
      } catch (error) {
        console.error("Erro ao buscar informações do filme:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  React.useEffect(() => {
    try {
      fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=pt-br-US&page=1`
      )
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
      fetch(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=pt-br-US&page=1`
      )
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
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-br`
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

  return (
    <MovieContext.Provider
      value={{
        trending,
        trendingWeekly,
        cast,
        crew,
        characters,
        directors,
        screenplay,
        writer,
        creator,
        search,
        setSearch,
        ListMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
