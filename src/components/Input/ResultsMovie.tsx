import React from "react";
import { MovieContext } from "@/context/ContextMovie";
import { Search } from "@/components/Input/Search";
import { Movie } from "@/context/movie/types";
import { Input } from "./Input";
import "./Input.css";

export const ResultsMovie = () => {
    const { searchResult, search, setSearch } = React.useContext(MovieContext);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <Input
                onSearchChange={handleSearchChange}
                search={search}
                placeholder="Digite um filme"
            />
            <div className="container-search">
                {searchResult.map((movie: Movie) => (
                    <Search key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};
