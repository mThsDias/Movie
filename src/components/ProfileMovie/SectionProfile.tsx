import React from "react";
import { Movie } from "@/context/movie/types";
import ImageUrl from "../CardMovie/ImageUrl";
import * as S from "./styles";
import { ProfileInfoAndPercentage } from "./ProfileInfoAndPercentage";
import { ProfileDescription } from "../InfoMovie/CreativeStaff/ProfileDescription";
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
              w={330}
              h={470}
            />
            <div>
              <ProfileInfoAndPercentage movie={movie} />
              <ProfileDescription movie={movie} />
            </div>
          </S.ContentMovieDescription>
        </S.Container>
      </S.ContentMovie>
      <S.ContainerCastAndStaff>
        <MainCast />
      </S.ContainerCastAndStaff>
    </>
  );
};
