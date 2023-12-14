"use client";

import React, { useEffect, useState } from "react";
import { Movie } from "@/Movie/context/types";
import { useParams } from "next/navigation";

export default function Search() {
  const searchParams = useParams();
  const search = searchParams.search;
  const [results, setResults] = useState<Movie[]>([]);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${search}`
      );
      const data = await response.json();
      setResults(data.results);
    };
    getResults();
  }, [search]);

  return (
    <div>
      <h1>Resultado</h1>
      <div>
        {results?.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
