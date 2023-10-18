import { Info } from "@/context/movie/types";
import * as S from "./styles";
import React from "react";

type GenresProps = {
  info: Info;
};

export const RunTime = ({ info }: GenresProps) => {
  function minutosParaHorasMinutos(minutos: number) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  return (
    <>
      {info && (
        <S.TagLine>
          <p>{minutosParaHorasMinutos(info.runtime)}</p>
        </S.TagLine>
      )}
    </>
  );
};
