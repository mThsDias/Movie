import React from "react";
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
            {movie.title ? (
              <span>{movie.title}</span>
            ) : (
              <span>{movie.name}</span>
            )}
          </S.InfoContainer>
          <div>
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </div>
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
