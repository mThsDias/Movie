import { CastContext } from "@/Movie/context/CastContext";
import React, { useContext } from "react";

export const CastMovie = () => {
  const { cast, error, loading } = useContext(CastContext);
  console.log(cast);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {cast &&
        cast.map((c) => (
          <div key={c.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${c.profile_path}`}
              alt={c.name}
            />
            <p>{c.name}</p>
            <p>{c.character}</p>
          </div>
        ))}
    </div>
  );
};
