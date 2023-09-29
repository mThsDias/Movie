import React from "react";
import { Movie } from "@/context/movie/types";
import { ImageUrl } from "./ImageUrl";
import * as S from "./styles";

type ImageComponent = {
    posterPatch: Movie;
};

export const ImageComponent = ({ posterPatch }: ImageComponent) => {
    return (
        <S.ContainerImage>
            <ImageUrl images={posterPatch} />
        </S.ContainerImage>
    );
};
