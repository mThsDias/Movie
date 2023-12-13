"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Movie } from "@/Movie/context/types";

export default function SearchResults() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // Extrair o valor da chave 'search' dos parâmetros de busca
        const searchValue = searchParams.get("search");

        if (searchValue) {
          // Realizar a lógica de fetch aqui, substituindo este exemplo
          const apiKey = "dcf6fe444e49bcbe4d8f215076000be9";
          const api = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${searchValue}&language=pt-BR`;

          const response = await fetch(api);
          const json = await response.json();

          if (response.ok) {
            setResults(json.results);
            console.log(json.results);
          } else {
            throw new Error("Erro na busca de resultados.");
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchResults();
  }, [searchParams]);
  return (
    <div>
      <h1>Resultados da busca por: {searchParams.get("search")}</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
