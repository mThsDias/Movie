import { Cast } from "@/context/movie/types";
import * as S from "../styles";
import React from "react";

type DirectorsProps = {
  directors: Cast[];
};

export const Directors = ({ directors }: DirectorsProps) => {
  return (
    <>
      {directors && (
        <div>
          {directors.map((director) => (
            <S.CastItem key={director.id}>
              <ul>
                <li>
                  <h4>{director.name}</h4>
                  <p>Diretor</p>
                </li>
              </ul>
            </S.CastItem>
          ))}
        </div>
      )}
    </>
  );
};
