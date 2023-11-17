import React from "react";
import * as S from "./styles";
import { Movie } from "@/contexts/movie/types";
import { ScreenPlay } from "./ScreenPlay";
import { Writer } from "./Writer";
import { Directors } from "./Directors";
import { MovieContext } from "@/context/ContextMovie";
import { Creator } from "./Creator";

type ProfileDescriptionProps = {
  movie: Movie;
};

export const ProfileDescription = ({ movie }: ProfileDescriptionProps) => {
  const { directors, screenplay, writer, creator } =
    React.useContext(MovieContext);

  return (
    <>
      {movie && (
        <>
          <S.SinopseContainer>
            <h3>Sinopse</h3>
            <p>{movie.overview}</p>
          </S.SinopseContainer>
          <S.CastContainer>
            <Writer writer={writer} />
            <ScreenPlay screenplay={screenplay} />
            <Directors directors={directors} />
            <Creator creator={creator} />
          </S.CastContainer>
        </>
      )}
    </>
  );
};
