"use client";

import React, { ReactNode, createContext } from "react";
import { useMovie } from "../hooks/useMovie";

interface MovieProviderProps {
  children: ReactNode;
}

interface MovieContextValue {
  movie: Movie[];
  loading: boolean;
  error: string | null;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export const MovieContext = createContext({} as MovieContextValue);

export function MovieProvider({ children }: MovieProviderProps) {
  const { movie, loading, error } = useMovie();

  return (
    <MovieContext.Provider value={{ movie, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
}
