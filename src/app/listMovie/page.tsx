"use client";

import React, { useEffect, useState } from "react";

import { Movie } from "@/Movie/context/types";
import { ImageComponent } from "@/components/Image";
import * as S from "./styles";
import { TitleComponent } from "@/components/Title";
import { DateComponent } from "@/components/Date";
import { formatDate } from "@/functions";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/Header/NavBar";

export default function ListMovie() {
  const [movieList, setMovieList] = React.useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
  const api = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`;
  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await fetch(`${api}${currentPage}`);
        const json = await response.json();

        if (response?.ok) {
          setMovieList(json.results);
          setTotalPages(json.total_pages);
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
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
      <S.BoxButton>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Página Anterior
        </button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Próxima Página
        </button>
      </S.BoxButton>
      <Footer />
    </main>
  );
}
