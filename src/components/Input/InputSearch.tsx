"use client";
import React from "react";
import "./InputSearch.css";
import { MovieContext } from "@/context/ContextMovie";

export const InputSearch = () => {
    const { searchResult, setSearch, search } = React.useContext(MovieContext);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <div className="input-search">
            <input
                type="text"
                placeholder="Pesquisar"
                onChange={handleSearch}
                value={search}
            />
            <ul>
                {searchResult.map((movie) => (
                    <li key={movie.id}>
                        <h1>{movie.title}</h1>
                    </li>
                ))}
            </ul>
        </div>
    );
};
