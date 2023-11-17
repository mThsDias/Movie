import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

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
          <h1>{movieItem.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`}
            alt={movieItem.title}
          />
          <p>{movieItem.overview}</p>
        </div>
      ))}
    </div>
  );
};
