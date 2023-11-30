import React, { useEffect } from "react";
import * as S from "./styles";
import { NavBar } from "../NavBar";
import { ComponentOnePiece } from "./ComponentOnePiece";

interface PosterData {
  file_path: string; // Adicione outras propriedades, se necessário
  posters: PosterData[];
}

export const Poster = () => {
  const [poster, setPoster] = React.useState<PosterData[]>([]);
  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/37854/images?api_key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setPoster(data.posters);
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }, []);

  return (
    <S.Main>
      <div
        style={{
          backgroundImage:
            poster.length > 0
              ? `url(https://image.tmdb.org/t/p/original${poster[0].file_path})`
              : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "96vh",
          boxShadow: "inset -10000px 0 20px rgba(0, 0, 0, 0.6)",
        }}
      >
        <S.blur>
          <NavBar />
        </S.blur>
        <ComponentOnePiece />
      </div>
    </S.Main>
  );
};
