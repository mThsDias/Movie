"use client";

import type { MovieContextValue, MovieProviderProps } from "./types";
import React, { createContext } from "react";
import { useMovie } from "../hooks/useMovie";

export const MovieContext = createContext({} as MovieContextValue);

export function MovieProvider({ children }: MovieProviderProps) {
  const { movie, loading, error } = useMovie();

  return (
    <MovieContext.Provider value={{ movie, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
}
