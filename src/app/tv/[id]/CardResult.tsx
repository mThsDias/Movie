import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { SearchContext } from "./context/SearchContext";

interface CardResultProps {
  selectedCategory: string;
}

export const CardResult = ({ selectedCategory }: CardResultProps) => {
  const { searchMovie, loading, error } = React.useContext(SearchContext);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <S.Flex>
      {searchMovie?.map((item) => {
        if (
          (selectedCategory === "tv" && item.media_type === "tv") ||
          (selectedCategory === "movie" && item.media_type === "movie")
        ) {
          return (
            <section key={item.id}>
              <S.Container>
                <S.Section>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title || item.name}
                    width={100}
                    height={160}
                    style={{
                      borderTopLeftRadius: "5px",
                      borderBottomLeftRadius: "5px",
                    }}
                  />
                  <S.BoxDescription>
                    <h5>{item.title || item.name}</h5>
                    <h6>{item.release_date || item.first_air_date}</h6>
                    <p>{item.overview}</p>
                  </S.BoxDescription>
                </S.Section>
              </S.Container>
            </section>
          );
        }
        return null; // Ignora itens que não correspondem à categoria selecionada
      })}
    </S.Flex>
  );
};
