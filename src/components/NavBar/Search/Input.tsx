import React from "react";
import * as S from "./styles";
import { MovieContext } from "@/context/ContextMovie";
import Link from "next/link";

export const Input = () => {
  const { search, setSearch } = React.useContext(MovieContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <S.InputGroup>
      <S.Input
        value={search}
        type="email"
        id="Email"
        name="Email"
        placeholder="Busque por filmes e séries..."
        autoComplete="off"
        onChange={handleChange}
      />
      <div>
        <Link href={`/search/${search}`}>
          <button>search</button>
        </Link>
      </div>
    </S.InputGroup>
  );
};
