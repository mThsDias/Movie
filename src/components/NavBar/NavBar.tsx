import React from "react";
import * as S from "./styles";
import BasicMenuMovies from "./BasicMenuMovies";
import { BasicMenuSeries } from "./BasicMenuSeries";

export const NavBar = () => {
    return (
        <S.BoxNavBar>
            <S.BoxMenu>
                <h2>AuthMovie</h2>
                <BasicMenuMovies titleMovie="Filmes" />
                <BasicMenuSeries titleSerie="Séries" />
            </S.BoxMenu>
            <div>
                <span>Entre</span>
            </div>
        </S.BoxNavBar>
    );
};
