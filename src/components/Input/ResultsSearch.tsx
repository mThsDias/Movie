import React from "react";
import { MovieContext } from "@/context/ContextMovie";
import { Search } from "@/components/Input/Search";
import { Movie } from "@/context/movie/types";
import "./InputSearch.css";

export const ResultsSearch = () => {
    const { searchResult } = React.useContext(MovieContext);
    return (
        <div className="container-search">
            {searchResult.map((movie: Movie) => (
                <Search key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
