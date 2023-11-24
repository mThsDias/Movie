import { MovieContext } from "../../../Movie/context/MovieContext";
import React from "react";

export const TagLine = () => {
  const { movie } = React.useContext(MovieContext);

  return (
    <>
      {movie?.map((item) => (
        <div key={item.id}>
          <p>{item.tagline}</p>
        </div>
      ))}
    </>
  );
};
