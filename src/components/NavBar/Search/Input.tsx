import React from "react";
import * as S from "./styles";

export const Input = () => {
  return (
    <S.InputGroup>
      <S.Input
        type="email"
        id="Email"
        name="Email"
        placeholder="Busque por filmes e séries..."
        autoComplete="off"
      />
      <div>
        <p>search</p>
      </div>
    </S.InputGroup>
  );
};
