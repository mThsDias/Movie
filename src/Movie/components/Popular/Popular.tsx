import React, { useState } from "react";
import * as S from "./styles";
import { PopularProvider } from "@/Movie/context/PopularContext";
import { MoviePopular } from "./MoviePopular";
import { PopularTvProvider } from "@/Tv/context/PopularTv";
import { TvPopular } from "@/Tv/components/Popular/TvPopular";

export const Popular = () => {
  const [showTrends, setShowTrends] = useState(true);

  const handleShowDay = () => {
    setShowTrends(true);
  };

  const handleShowWeek = () => {
    setShowTrends(false);
  };

  return (
    <div>
      <S.BoxPopular>
        <h2>Populares</h2>
        <S.Button onClick={handleShowDay}>Filme</S.Button>
        <S.Button onClick={handleShowWeek}>Tv</S.Button>
      </S.BoxPopular>
      <PopularTvProvider>
        <PopularProvider>
          {showTrends ? <MoviePopular /> : <TvPopular />}
        </PopularProvider>
      </PopularTvProvider>
    </div>
  );
};
