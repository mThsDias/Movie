import { Movie } from "@/context/movie/types";
import React from "react";
import * as S from "./styles";
import { Genres } from "./Genres";
import { MovieContext } from "@/context/ContextMovie";

type InfoContainerProps = {
  movie: Movie;
};
export const InfoComponent = ({ movie }: InfoContainerProps) => {
  const { information } = React.useContext(MovieContext);

  const getYearFromDate = (dateString: string) => {
    if (dateString) {
      const year = dateString.slice(0, 4);
      return `(${year})`;
    }
    return "";
  };

  return (
    <S.InfoContainer>
      <div>
        <h3>{movie.title || movie.name}</h3>
        <span>
          {getYearFromDate(movie.first_air_date || movie.release_date)}
        </span>
      </div>
      <div>
        <Genres info={information} />
      </div>
    </S.InfoContainer>
  );
};