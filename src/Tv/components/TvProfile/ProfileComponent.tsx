import React, { useContext } from "react";

import { ImageComponent } from "@/components/Image/ImageComponent";
import { TitleComponent } from "@/components/Title/TitleComponent";

import * as S from "../../../Movie/components/MovieProfile/styles";
import { TrailerTv } from "../Trailer/TrailerTv";
import { CastTv } from "../Cast/CastTv";
import { TvContext } from "@/Tv/context/TvContext";

export const ProfileComponent = () => {
  const { tv, error, loading } = useContext(TvContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <S.Main>
      {tv?.map((movie) => (
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
              <ImageComponent
                img={movie.poster_path}
                w={430}
                h={645}
                borderRadius={15}
              />
              <div>
                <S.BoxTitle>
                  <TitleComponent title={movie} />
                </S.BoxTitle>
                <S.BoxGenres>
                  {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </S.BoxGenres>
                <S.BoxTaglineAndRuntime>
                  <S.Tagline>
                    <p>{movie.tagline}</p>
                  </S.Tagline>
                </S.BoxTaglineAndRuntime>
                <S.BoxOverview>
                  <h2>Sinopse</h2>
                  <p>{movie.overview}</p>
                </S.BoxOverview>
                <div>
                  <CastTv />
                </div>
              </div>
            </S.Container>
          </div>
        </section>
      ))}
      <TrailerTv />
    </S.Main>
  );
};
