import React, { useContext } from "react";

import { MovieContext } from "@/Movie/context/MovieContext";
import { CastMovie } from "../Cast/CastMovie";
import { BsClock } from "react-icons/bs";
import { formatTime } from "@/functions";
import { TrailerMovie } from "../Trailer/TrailerMovie";
import { ImageComponent, TitleComponent } from "@/components";

import * as S from "./styles";

export const ProfileComponent = () => {
  const { movie, error, loading } = useContext(MovieContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <S.Main>
      {movie?.map((movie) => (
        <section key={movie.id}>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "50vh",
            }}
          >
            <S.Container>
              <ImageComponent img={movie} w={430} h={645} borderRadius={15} />
              <div>
                <S.BoxTitle>
                  <TitleComponent title={movie} />
                </S.BoxTitle>
                <S.BoxRuntimeAndGenres>
                  <S.BoxGenres>
                    {movie.genres.map((genre) => (
                      <span key={genre.id}>{genre.name}</span>
                    ))}
                  </S.BoxGenres>
                </S.BoxRuntimeAndGenres>
                <S.BoxTaglineAndRuntime>
                  <S.Tagline>
                    <p>{movie.tagline}</p>
                  </S.Tagline>
                  <S.BoxRuntime>
                    <BsClock />
                    <span>{formatTime(movie.runtime)}</span>
                  </S.BoxRuntime>
                </S.BoxTaglineAndRuntime>
                <S.BoxOverview>
                  <h2>Sinopse</h2>
                  <p>{movie.overview}</p>
                </S.BoxOverview>
                <div>
                  <CastMovie />
                </div>
              </div>
            </S.Container>
          </div>
        </section>
      ))}
      <S.Trailer>
        <TrailerMovie />
      </S.Trailer>
    </S.Main>
  );
};
