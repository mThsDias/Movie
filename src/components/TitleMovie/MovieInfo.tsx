import React from "react";
import * as S from "./styles";

type MovieInfoProps = {
    title: string;
    releaseDate: string;
    name: string;
    firstAirDate: string;
    voteAverage: number;
};

export const MovieInfo = ({
    title,
    releaseDate,
    name,
    firstAirDate,
    voteAverage,
}: MovieInfoProps) => {
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        return new Date(date).toLocaleDateString("pt-BR", options);
    };

    return (
        <S.ContainerInfo>
            <S.VoteAverage>
                {((voteAverage / 10) * 100).toFixed(0)}%
            </S.VoteAverage>
            <S.Title>
                {title}
                {name}
            </S.Title>
            <S.Paragraph>
                {releaseDate
                    ? formatDate(releaseDate)
                    : formatDate(firstAirDate)}
            </S.Paragraph>
        </S.ContainerInfo>
    );
};
