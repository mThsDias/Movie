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
  const images = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <>
      <div
        style={{
          background: `url(${images})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <S.BackgroundColor>
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
        </S.BackgroundColor>
      </div>
      <S.ContainerCastAndStaff>
        <span>Elenco principal</span>
        <MainCast />
      </S.ContainerCastAndStaff>
    </>
  );
};
