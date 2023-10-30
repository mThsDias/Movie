import React from "react";
import { Input } from "./Input";
import * as S from "./styles";

export const ComponentInput = () => {
  return (
    <S.Box>
      <S.Content>
        <h1>Bem-vindo(a).</h1>
        <h2>Milhões de Séries e Filmes para Descobrir. Explore já.</h2>
        <Input />
      </S.Content>
    </S.Box>
  );
};
