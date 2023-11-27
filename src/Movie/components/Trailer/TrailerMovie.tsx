import React, { useContext } from "react";

import * as S from "./styles";
import { TrailerContext } from "@/Movie/context/TrailerContext";

export const TrailerMovie = () => {
  const { trailer, error, loading } = useContext(TrailerContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <S.ContainerTrailer>
      <div>
        <h1>Trailer</h1>
        <iframe
          width="1450"
          height="800"
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </S.ContainerTrailer>
  );
};
