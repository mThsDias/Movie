import { useParams } from "next/navigation";
import React, { useContext } from "react";

import { MovieContext } from "@/Movie/context/MovieContext";
import Image from "next/image";

export const MovieProfile = () => {
  const { movie, error, loading } = useContext(MovieContext);

  const params = useParams();
  const { id } = params;

  const movies = movie?.find((movie) => movie?.id === Number(id)) || null;

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>{movies?.title}</h1>
      {movies && movies.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/original/${movies?.poster_path}`}
          alt={"Poster"}
          width={330}
          height={470}
          priority
        />
      ) : (
        <h1>Imagem Não Disponível</h1>
      )}
      <p>{movies?.overview}</p>
    </div>
  );
};
