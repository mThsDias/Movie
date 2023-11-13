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
    <>
      <S.BoxFilter>
        Resultado da Busca
        <div>
          <ul>
            <li onClick={() => handleCategoryChange("tv")}>
              TV{searchMovie.filter((item) => item.media_type === "tv").length}
            </li>
            <li onClick={() => handleCategoryChange("movie")}>
              Filmes
              {searchMovie.filter((item) => item.media_type === "movie").length}
            </li>
          </ul>
        </div>
      </S.BoxFilter>
      <CardResult selectedCategory={selectedCategory} />
    </>
  );
};
