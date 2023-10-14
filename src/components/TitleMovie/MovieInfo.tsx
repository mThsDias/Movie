import React from "react";
import * as S from "./styles";

type MovieInfoProps = {
  title: string;
  releaseDate: string;
  name: string;
  firstAirDate: string;
};

export const MovieInfo = ({
  title,
  releaseDate,
  name,
  firstAirDate,
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
    <>
      <span>
        {title}
        {name}
      </span>
      <S.Paragraph>
        {releaseDate ? formatDate(releaseDate) : formatDate(firstAirDate)}
      </S.Paragraph>
    </>
  );
};
