import React from "react";
import { Movie } from "@/context/movie/types";
import { MovieInfo } from "../TitleMovie/MovieInfo";
import { ImageComponent } from "./ImageComponent";
import * as S from "./styles";
import Link from "next/link";

type SectionMovieProps = {
  cardMovie: Movie[];
};

export const SectionMovie = ({ cardMovie }: SectionMovieProps) => {
  const [showBlur, setShowBlur] = React.useState(true);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;

    if (container.scrollLeft === 0) {
      setShowBlur(true);
    } else {
      setShowBlur(false);
    }
  };

  return (
    <S.CustomBox>
      <S.InnerContainer onScroll={handleScroll}>
        {cardMovie.map((movie) => (
          <S.ContentMovie key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <ImageComponent movie={movie} />
              <S.ContainerInfo>
                <S.Title>
                  <MovieInfo
                    title={movie.title}
                    name={movie.name}
                    releaseDate={movie.release_date}
                    firstAirDate={movie.first_air_date}
                  />
                </S.Title>
              </S.ContainerInfo>
            </Link>
          </S.ContentMovie>
        ))}
      </S.InnerContainer>
      <S.EffectBlur style={{ opacity: showBlur ? 1 : 0 }} />
    </S.CustomBox>
  );
};
