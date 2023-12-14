import React from "react";
import * as S from "./styles";
import { CgArrowRightO } from "react-icons/cg";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [search, setSearch] = React.useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/resultsSearch/${search}`);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <S.ContainerInput>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyPress}
      />

      <button type="submit" onClick={handleSearch}>
        <CgArrowRightO />
      </button>
    </S.ContainerInput>
  );
};
