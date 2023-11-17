import { MovieContext } from "@/context/ContextMovie";
import * as S from "./styles";
import React from "react";

export const TagLine = () => {
  const { ListTv } = React.useContext(MovieContext);

  return (
    <>
      {ListTv.map((item) => (
        <S.TagLine key={item.id}>
          <p>{item.tagline}</p>
        </S.TagLine>
      ))}
    </>
  );
};
