import React from "react";
import * as S from "./styles";
import Link from "next/link";
import { MovieContext } from "@/context/ContextMovie";

export const Input = () => {
  const { search, setSearch } = React.useContext(MovieContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <S.InputGroup>
      <S.Input
        value={search}
        placeholder="Busque por filmes e séries..."
        autoComplete="off"
        onChange={handleChange}
      />
      <div>
        <Link href={`/tv/${search}`}>
          <button>search</button>
        </Link>
      </div>
    </S.InputGroup>
  );
};
