import React from "react";
import ImageUrl from "./ImageUrl";
import { Movie } from "@/contexts/movie/types";

type ImageComponent = {
  movie: Movie;
};

export const ImageComponent = ({ movie }: ImageComponent) => {
  return <ImageUrl movie={movie} />;
};
