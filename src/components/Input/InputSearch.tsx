"use client";
import React from "react";
import "./InputSearch.css";
import { searchUrl } from "@/api/Api";

export const InputSearch = () => {
    const [search, setSearch] = React.useState<string>("");
    const [searchResult, setSearchResult] = React.useState<string[]>([]);

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
        </div>
    );
};
