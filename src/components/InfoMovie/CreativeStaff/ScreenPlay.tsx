import * as S from "./styles";
import React from "react";
import { Cast } from "@/contexts/movie/types";

type ScreenPlayProps = {
  screenplay: Cast[];
};

export const ScreenPlay = ({ screenplay }: ScreenPlayProps) => {
  return (
    <>
      {screenplay && (
        <div>
          {screenplay.map((screenplay) => (
            <S.CastItem key={screenplay.id}>
              <h4>{screenplay.name}</h4>
              <p>Roteirista</p>
            </S.CastItem>
          ))}
        </div>
      )}
    </>
  );
};
