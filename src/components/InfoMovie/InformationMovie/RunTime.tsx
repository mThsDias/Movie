import { Info } from "@/context/movie/types";
import * as S from "./styles";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
        <S.RunTime>
          <p>
            <AccessTimeIcon style={{ fontSize: "1.3rem" }} />
            {minutosParaHorasMinutos(info.runtime)}
          </p>
        </S.RunTime>
      )}
    </>
  );
};
