import * as S from "./styles";
import React from "react";
import { Cast } from "@/context/movie/types";

type WriteProps = {
  writer: Cast[];
};

export const Writer = ({ writer }: WriteProps) => {
  return (
    <>
      {writer && (
        <div>
          {writer.map((writer) => (
            <S.CastItem key={writer.id}>
              <ul>
                <li>
                  <h4>{writer.name}</h4>
                  <p>Escritor</p>
                </li>
              </ul>
            </S.CastItem>
          ))}
        </div>
      )}
    </>
  );
};
