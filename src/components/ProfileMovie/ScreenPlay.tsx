import * as S from "./styles";
import React from "react";
import { Cast } from "@/context/movie/types";

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
              <ul>
                <li>
                  <h4>{screenplay.name}</h4>
                  <p>Roteirista</p>
                </li>
              </ul>
            </S.CastItem>
          ))}
        </div>
      )}
    </>
  );
};
