import * as S from "./styles";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { MovieContext } from "@/context/ContextMovie";

export const RunTime = () => {
  const { ListTv } = React.useContext(MovieContext);

  function minutosParaHorasMinutos(minutos: number) {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;
    return `${horas}h ${minutosRestantes}min`;
  }

  return (
    <>
      {ListTv.map((item) => (
        <S.RunTime key={item.id}>
          <p>
            <AccessTimeIcon style={{ fontSize: "1.3rem" }} />
            {minutosParaHorasMinutos(item.runtime)}
          </p>
        </S.RunTime>
      ))}
    </>
  );
};
