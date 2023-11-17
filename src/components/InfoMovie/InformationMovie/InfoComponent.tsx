import { Movie } from "@/contexts/movie/types";
import React from "react";
import * as S from "./styles";
import { Genres } from "./Genres";
import { RunTime } from "./RunTime";

type InfoContainerProps = {
  movie: Movie;
};

export const InfoComponent = ({ movie }: InfoContainerProps) => {
  const getYearFromDate = (dateString: string) => {
    if (dateString) {
      const year = dateString.slice(0, 4);
      return `(${year})`;
    }
    return "";
  };

  const isTV = movie.media_type === "tv" ? "" : "movie";

  return (
    <S.InfoContainer>
      <div>
        <h3>{movie.title || movie.name}</h3>
        <span>
          {getYearFromDate(movie.first_air_date || movie.release_date)}
        </span>
      </div>
      <div>
        <Genres />
        {!isTV && <RunTime />}
      </div>
    </S.InfoContainer>
  );
};
