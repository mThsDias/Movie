import React from "react";
import * as S from "./styles";

type TitleMovieProps = {
    title: string;
};

export const TitleMovie = ({ title }: TitleMovieProps) => {
    return (
        <S.ContainerTitle>
            <S.TitleTrending>{title}</S.TitleTrending>
        </S.ContainerTitle>
    );
};
