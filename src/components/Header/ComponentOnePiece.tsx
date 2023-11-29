import React, { useEffect } from "react";

import * as S from "./styles";
import { Tv } from "@/Tv/context/types";
import { ImageComponent } from "../Image";

export const ComponentOnePiece = () => {
  const [onePiece, setOnePiece] = React.useState<Tv[]>([]);

  const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/37854?api_key=${apiKey}&language=pt-BR`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setOnePiece([data]);
      })
      .catch((error) => console.error("Erro na requisição:", error));
  }, []);

  return (
    <S.ContainerOnePiece>
      {onePiece.map((item) => (
        <S.BoxOnePiece key={item.id}>
          <S.BoxDescription>
            <div>
              <h1>{item.name}</h1>
              <p>{item.overview}</p>
            </div>
            <S.Button>
              <button>Assistir Agora</button>
              <button>Mais Informações</button>
            </S.Button>
          </S.BoxDescription>
          <ImageComponent
            img={item.poster_path}
            borderRadius={20}
            w={430}
            h={620}
          />
        </S.BoxOnePiece>
      ))}
    </S.ContainerOnePiece>
  );
};
