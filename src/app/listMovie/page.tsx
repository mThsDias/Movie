"use client";

import React, { useEffect } from "react";

import { NavBar } from "@/components/Header/NavBar";
import { Movie } from "@/Movie/context/types";
import { ImageComponent } from "@/components/Image";
import * as S from "./styles";
import { TitleComponent } from "@/components/Title";
import { DateComponent } from "@/components/Date";
import { formatDate } from "@/functions";
import Link from "next/link";

export default function ListMovie() {
  const [movieList, setMovieList] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const api = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const json = await response.json();

        if (response?.ok) {
          setMovieList(json.results);
        } else {
          throw new Error(json.message);
        }
      } catch (error: unknown) {
        setError(error as string);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <main style={{ background: "#0f0f0f" }}>
      <NavBar />
      <S.ContainerGrid>
        {movieList.map((item) => (
          <S.BoxGrid key={item.id}>
            <ImageComponent
              img={item.poster_path}
              h={350}
              w={230}
              borderRadius={10}
            />
            <Link href={`/movies/${item.id}`}>
              <h2>
                <TitleComponent title={item} />
              </h2>
            </Link>
            <p>
              <DateComponent
                date={item.first_air_date || item.release_date}
                formatDate={formatDate}
              />
            </p>
          </S.BoxGrid>
        ))}
      </S.ContainerGrid>
    </main>
  );
}
