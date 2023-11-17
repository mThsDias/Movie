import * as S from "./styles";
import React from "react";
import { MovieContext } from "@/context/ContextMovie";

export const Genres = () => {
  const { ListTv } = React.useContext(MovieContext);

  return (
    <>
      {ListTv.map((item) => (
        <S.ListGenres key={item.id}>
          <ul>
            {item.genres?.map(
              (
                genre: {
                  name: string;
                },
                index: number
              ) => (
                <li key={index}>{genre.name}</li>
              )
            )}
          </ul>
        </S.ListGenres>
      ))}
    </>
  );
};
