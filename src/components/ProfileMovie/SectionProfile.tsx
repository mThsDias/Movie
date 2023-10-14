import React from "react";
import { Movie } from "@/context/movie/types";
import { ImageUrl } from "../CardMovie/ImageUrl";
import * as S from "./styles";
import { ProfileInfoAndPercentage } from "./ProfileInfoAndPercentage";
import { ProfileDescription } from "./ProfileDescription";
import { MainCast } from "./MainCast";

type SectionProfileProps = {
  movie: Movie;
};

export const SectionProfile = ({ movie }: SectionProfileProps) => {
  return (
    <>
      <S.ContentMovie>
        <S.Container>
          <S.ContentMovieDescription>
            <ImageUrl
              movie={movie}
              isVoteAverageActive={false}
              w={300}
              h={450}
            />
            <div>
              <ProfileInfoAndPercentage movie={movie} />
              <ProfileDescription movie={movie} />
            </div>
          </S.ContentMovieDescription>
        </S.Container>
      </S.ContentMovie>
      <div>
        <MainCast />
      </div>
    </>
  );
};
