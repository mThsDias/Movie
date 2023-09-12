"use client";
import React from "react";
import { searchUrl } from "@/api/Api";

export const InputSearch = () => {
        const [search, setSearch] = React.useState<string>("");
        const [searchResult, setSearchResult] = React.useState<string[]>([]);

        React.useEffect(() => {
            if (search.trim() === "") {
                setSearchResult([]);
                return;
            }

            fetch(`${searchUrl}/${encodeURIComponent(search)}`);
        })
            .then<Response>((response: { ok: any; json: () => any }) => {
                if (!response.ok) {
                    throw new Error("Erro na resposta da API");
                }
                return response.json();
            })
            .then((data: { results: any }) => {
                // Atualizar os resultados da busca com os dados da API
                setSearchResult(data.results);
            })
            .catch((error: any) => {
                console.error("Erro ao buscar filmes:", error);
            });
    },
    [search];
