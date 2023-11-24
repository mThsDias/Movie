import React, { useState } from "react";
import * as S from "./styles";

import { CardResult } from "./CardResult";
import { SearchContext } from "./context/SearchContext";

export const FilterMovie = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("tv");
  const { searchMovie } = React.useContext(SearchContext);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <S.BoxFilter>
        <h3>Resultado da Busca</h3>
        <S.ContainerListFilter>
          <ul>
            <li
              onClick={() => handleCategoryChange("tv")}
              style={{
                backgroundColor: selectedCategory === "tv" ? "#ccc" : "#fff",
              }}
            >
              <a
                style={{
                  fontWeight: selectedCategory === "tv" ? "bold" : "normal",
                }}
              >
                Séries
              </a>
              <span
                style={{
                  backgroundColor: selectedCategory === "tv" ? "#fff" : "#ccc",
                }}
              >
                {searchMovie?.filter((item) => item.media_type === "tv").length}
              </span>
            </li>
            <li
              onClick={() => handleCategoryChange("movie")}
              style={{
                backgroundColor: selectedCategory === "movie" ? "#ccc" : "#fff",
              }}
            >
              <a
                style={{
                  fontWeight: selectedCategory === "movie" ? "bold" : "normal",
                }}
              >
                Filmes
              </a>
              <span
                style={{
                  backgroundColor:
                    selectedCategory === "movie" ? "#fff" : "#ccc",
                }}
              >
                {
                  searchMovie?.filter((item) => item.media_type === "movie")
                    .length
                }
              </span>
            </li>
          </ul>
        </S.ContainerListFilter>
      </S.BoxFilter>
      <CardResult selectedCategory={selectedCategory} />
    </div>
  );
};
