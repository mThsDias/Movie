import React from "react";
import { Movie } from "@/context/movie/types";
import { ImageUrl } from "./ImageUrl";

type ImageComponent = {
    posterPatch: Movie;
    voteAverage: number;
};

export const ImageComponent = ({
    posterPatch,
    voteAverage,
}: ImageComponent) => {
    return <ImageUrl images={posterPatch} voteAverage={voteAverage} />;
};
