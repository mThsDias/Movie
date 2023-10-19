import { MovieContext } from "@/context/ContextMovie";
import * as S from "./styles";
import React from "react";

export const TagLine = () => {
  const { information } = React.useContext(MovieContext);

  return (
    <>
      {information && (
        <S.TagLine>
          <p>{information.tagline}</p>
        </S.TagLine>
      )}
    </>
  );
};
