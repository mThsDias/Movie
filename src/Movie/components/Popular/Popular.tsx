import React, { useState } from "react";
import * as S from "./styles";
import { PopularProvider } from "@/Movie/context/PopularContext";
import { ComponentPopular } from "./ComponentPopular";

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
        <h2>Tendências</h2>
        <S.Button onClick={handleShowDay}>Filme</S.Button>
        <S.Button onClick={handleShowWeek}>Tv</S.Button>
      </S.BoxPopular>
      <PopularProvider>
        {showTrends ? <ComponentPopular /> : <>...</>}
      </PopularProvider>
    </div>
  );
};
