import { TrailerContext } from "@/Movie/context/TrailerContext";
import React, { useContext } from "react";

export const TrailerMovie = () => {
  const { trailer, error, loading } = useContext(TrailerContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <iframe
        width="1450"
        height="800"
        src={`https://www.youtube.com/embed/${trailer?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
