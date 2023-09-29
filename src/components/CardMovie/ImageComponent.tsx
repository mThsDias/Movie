import React from "react";
import { Movie } from "@/context/movie/types";
import { ImageUrl } from "./ImageUrl";
import * as S from "./styles";

type ImageComponent = {
    posterPatch: Movie;
    voteAverage: number;
};

export const ImageComponent = ({
    posterPatch,
    voteAverage,
}: ImageComponent) => {
    return (
        <S.ContainerImage>
            <ImageUrl images={posterPatch} voteAverage={voteAverage} />
        </S.ContainerImage>
    );
};
