import { Info } from "@/context/movie/types";
import * as S from "./styles";
import React from "react";

type GenresProps = {
  info: Info;
};

export const Genres = ({ info }: GenresProps) => {
  return (
    <>
      {info.genres?.map((item, index) => (
        <S.ListGenres key={item.id}>
          <ul>
            <li>
              {item.name} {index < info.genres.length - 1 ? "," : ""}
            </li>
          </ul>
        </S.ListGenres>
      ))}
    </>
  );
};
