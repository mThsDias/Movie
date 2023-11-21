import React, { useContext } from "react";
import Image from "next/image";

import { MovieContext } from "../context/MovieContext";
import Link from "next/link";

export const MovieItem = () => {
  const { movie, loading, error } = useContext(MovieContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {movie?.map((movieItem) => (
        <div key={movieItem.id}>
          <Link href={`/movies/${movieItem.id}`}>
            <h1>{movieItem.title}</h1>
          </Link>
          <Image
            src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
            alt={movieItem.title}
            width={150}
            height={230}
            style={{ borderRadius: "10px" }}
            priority
          />
          <p>{movieItem.overview}</p>
        </div>
      ))}
    </div>
  );
};
