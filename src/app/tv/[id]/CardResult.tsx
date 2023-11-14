import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { SearchContext } from "./context/SearchContext";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

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
          const releaseDate = item.release_date || item.first_air_date;
          const formattedDate = releaseDate
            ? format(parseISO(releaseDate), "d 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })
            : "";
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
                    {formattedDate && <h6>{formattedDate}</h6>}
                    <p>{item.overview}</p>
                  </S.BoxDescription>
                </S.Section>
              </S.Container>
            </section>
          );
        }
        return null;
      })}
    </S.Flex>
  );
};
