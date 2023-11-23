import React, { useContext } from "react";
import Image from "next/image";

import { MovieContext } from "@/Movie/context/MovieContext";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import * as S from "./styles";
import { OverViewComponent } from "@/components/OverView";

export const ProfileComponent = () => {
  const { movie, error, loading } = useContext(MovieContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  const getYearFromDate = (dateString: string) => {
    if (dateString) {
      const year = dateString.slice(0, 4);
      return `(${year})`;
    }
    return "";
  };

  function minutosParaHorasMinutos(minutos: number) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  const valorRecebidoComoString = movie
    ?.map((movie) => movie.vote_average)
    .join();

  return (
    <div>
      {movie?.map((movie) => (
        <div key={movie.id}>
          <S.ContainerProfile>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width={330}
              height={470}
              style={{ borderRadius: "10px" }}
              alt="poster"
              priority
            />
            <div>
              <S.BoxTitleAndDate>
                <h3>{movie.title || movie.name}</h3>
                <span>
                  {getYearFromDate(movie.first_air_date || movie.release_date)}
                </span>
              </S.BoxTitleAndDate>
              <S.BoxRuntimeAndGenres>
                <S.BoxGenres>
                  {movie.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </S.BoxGenres>
                <S.BoxRuntime>
                  <AccessTimeIcon style={{ fontSize: "1.3rem" }} />
                  {minutosParaHorasMinutos(movie.runtime)}
                </S.BoxRuntime>
              </S.BoxRuntimeAndGenres>
              <div>
                <OverViewComponent
                  voteAverage={parseFloat(valorRecebidoComoString)}
                />
              </div>
            </div>
          </S.ContainerProfile>
        </div>
      ))}
    </div>
  );
};
