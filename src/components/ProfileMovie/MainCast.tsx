import { MovieContext } from "@/context/ContextMovie";
import { Cast } from "@/context/movie/types";
import React from "react";

type MainCastProps = {
    member: Cast[];
};

export const MainCast = ({ member }: MainCastProps) => {
    const { credits } = React.useContext(MovieContext);
    console.log(credits);

    return (
        <div>
            <h3>Elenco Principal</h3>
        </div>
    );
};
