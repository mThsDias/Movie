import React, { useState } from "react";

import { TrendsDay } from "./TrendsOfTheDay/TrendsDay";
import { TrendsWeek } from "./TrendsOfTheWeek/TrendsWeek";
import { TrendingsProvider } from "./context/TrendsContext";

import * as S from "./styles";

export const Trends = () => {
  const [showTrends, setShowTrends] = useState(true);

  const handleShowDay = () => {
    setShowTrends(true);
  };

  const handleShowWeek = () => {
    setShowTrends(false);
  };

  return (
    <div>
      <S.BoxTrends>
        <h2>Tendências</h2>
        <S.Button onClick={handleShowDay}>Hoje</S.Button>
        <S.Button onClick={handleShowWeek}>Nesta Semana</S.Button>
      </S.BoxTrends>
      <TrendingsProvider>
        {showTrends ? <TrendsDay /> : <TrendsWeek />}
      </TrendingsProvider>
    </div>
  );
};
