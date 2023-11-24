import React, { useContext } from "react";

import Image from "next/image";

import { MovieContext } from "@/Movie/context/MovieContext";
import { CastMovie } from "../Cast/CastMovie";
import { BsClock } from "react-icons/bs";

import * as S from "./styles";
import { TrailerMovie } from "../Trailer/TrailerMovie";

export const ProfileComponent = () => {
  const { movie, error, loading } = useContext(MovieContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  function minutosParaHorasMinutos(minutos: number) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
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
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={430}
                height={645}
                style={{ borderRadius: "30px" }}
                alt="poster"
                priority
              />
              <div>
                <S.BoxTitle>
                  <h1>{movie.title || movie.name}</h1>
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
                    {minutosParaHorasMinutos(movie.runtime)}
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
