import React from "react";
import { PercentageRounded } from "../CardMovie/PercentageRounded";
import { Movie } from "@/context/movie/types";
import * as S from "./styles";
import Modal from "./Trailer/Modal";
import { InfoComponent } from "@/components/InfoMovie/InformationMovie/InfoComponent";
import { TagLine } from "../InfoMovie/InformationMovie/TagLine";

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
          <div>
            <InfoComponent movie={movie} />
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
          <TagLine />
        </>
      )}
    </div>
  );
};
