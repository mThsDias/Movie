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
              <h4>{writer.name}</h4>
              <p>Escritor</p>
            </S.CastItem>
          ))}
        </div>
      )}
    </>
  );
};
