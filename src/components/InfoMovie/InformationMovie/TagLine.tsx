import { Info } from "@/context/movie/types";
import * as S from "./styles";
import React from "react";

type GenresProps = {
  info: Info;
};

export const TagLine = ({ info }: GenresProps) => {
  return (
    <>
      {info && (
        <S.Container>
          <ul>
            <li>{info.tagline}</li>
          </ul>
        </S.Container>
      )}
    </>
  );
};
