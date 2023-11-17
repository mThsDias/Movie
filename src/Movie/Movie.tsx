import React from "react";
import { MovieProvider } from "./context/MovieContext";
import { MovieItem } from "./components/MovieItem";

export const Movie = () => {
  return (
    <MovieProvider>
      <MovieItem />
    </MovieProvider>
  );
};
