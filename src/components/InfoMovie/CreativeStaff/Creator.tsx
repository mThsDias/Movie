import * as S from "./styles";
import React from "react";
import { Cast } from "@/contexts/movie/types";

type CreatorProps = {
  creator: Cast[];
};

export const Creator = ({ creator }: CreatorProps) => {
  return (
    <>
      {creator && (
        <div>
          {creator.map((creator) => (
            <S.CastItem key={creator.id}>
              <h4>{creator.name}</h4>
              <p>Criação</p>
            </S.CastItem>
          ))}
        </div>
      )}
    </>
  );
};
