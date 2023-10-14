import React from "react";
import { SectionMovie } from "../CardMovie/SectionMovie";
import { MovieContext } from "@/context/ContextMovie";
import { TitleMovie } from "../TitleMovie/TitleMovie";
import * as S from "./styles";

export const Trending = () => {
  const { trending, trendingWeekly } = React.useContext(MovieContext);
  const [activeButton, setActiveButton] = React.useState("hoje");
  const [moviesToShow, setMoviesToShow] = React.useState(trending);

  const handleButtonClick = (button: React.SetStateAction<string>) => {
    setActiveButton(button);
  };

  React.useEffect(() => {
    if (activeButton === "hoje") {
      setMoviesToShow(trending);
    } else if (activeButton === "semana") {
      setMoviesToShow(trendingWeekly);
    }
  }, [activeButton, trending, trendingWeekly]);

  return (
    <S.Container>
      <S.Content>
        <TitleMovie title="Tendência" />
        <S.ContainerButton>
          <S.Button
            onClick={() => handleButtonClick("hoje")}
            className={activeButton === "hoje" ? "active" : ""}
          >
            Hoje
          </S.Button>
          <S.Button
            onClick={() => handleButtonClick("semana")}
            className={activeButton === "semana" ? "active" : ""}
          >
            Nesta Semana
          </S.Button>
        </S.ContainerButton>
      </S.Content>
      <SectionMovie cardMovie={moviesToShow} />
    </S.Container>
  );
};
