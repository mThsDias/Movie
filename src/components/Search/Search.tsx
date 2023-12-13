import React from "react";
import { useRouter } from "next/navigation";

export const Search = () => {
  const [search, setSearch] = React.useState<string>("");

  const router = useRouter();

  return (
    <div>
      <input
        type="text"
        placeholder="Busque por um Filme ou Série..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        type="submit"
        onClick={() => router.push(`/resultsSearch/${search}`)}
      >
        Buscar
      </button>
    </div>
  );
};
