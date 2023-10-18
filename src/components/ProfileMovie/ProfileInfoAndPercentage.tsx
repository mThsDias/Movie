import React from "react";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { PercentageRounded } from "../CardMovie/PercentageRounded";
import { Movie } from "@/context/movie/types";
import * as S from "./styles";
import Modal from "./Trailer/Modal";

type ProfileInfoAndPercentageProps = {
  movie: Movie;
};

export const ProfileInfoAndPercentage = ({
  movie,
}: ProfileInfoAndPercentageProps) => {
  return (
    <div>
      {movie && (
        <>
          <S.InfoContainer>
            <MovieInfo
              title={movie.title}
              name={movie.name}
              releaseDate={movie.release_date}
              firstAirDate={movie.first_air_date}
            />
          </S.InfoContainer>
          <S.PercentageContainer>
            <S.CircleContainer>
              <PercentageRounded voteAverage={movie.vote_average} />
            </S.CircleContainer>
            <p>Avaliação dos usuários</p>
            <div style={{ marginLeft: "15rem" }}>
              <Modal />
            </div>
          </S.PercentageContainer>
        </>
      )}
    </div>
  );
};
