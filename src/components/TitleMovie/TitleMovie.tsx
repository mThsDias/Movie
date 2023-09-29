import React from "react";
import * as S from "./styles";

type TitleMovieProps = {
    title: string;
};

export const TitleMovie = ({ title }: TitleMovieProps) => {
    return (
        <div>
            <S.TitleTrending>{title}</S.TitleTrending>
        </div>
    );
};
