import React from "react";
import Image from "next/image";
import * as S from "./styles";
import "react-circular-progressbar/dist/styles.css";
import { Movie } from "@/context/movie/types";
import { PercentageRounded } from "./PercentageRounded";

type ImageUrlProps = {
  movie: Movie;
  isVoteAverageActive?: boolean;
  w?: number;
  h?: number;
};

const ImageUrl = ({
  movie,
  isVoteAverageActive = true,
  w,
  h,
}: ImageUrlProps) => {
  return (
    <S.ContainerImageUrl>
      {movie && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={"Poster"}
          width={w ?? 150}
          height={h ?? 230}
          style={{
            borderRadius: "7px",
            objectFit: "cover",
            cursor: "pointer",
          }}
          priority
        />
      )}
      {isVoteAverageActive && (
        <S.CircleContainer>
          <PercentageRounded voteAverage={movie.vote_average} />
        </S.CircleContainer>
      )}
    </S.ContainerImageUrl>
  );
};

export default ImageUrl;
