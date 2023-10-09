import { MovieContext } from "@/context/ContextMovie";
import { Movie } from "@/context/movie/types";
import { useParams } from "next/navigation";
import React from "react";
import { SectionProfile } from "../ProfileMovie/SectionProfile";

export const Profile = () => {
    const params = useParams();
    const { id } = params;

    const { trending } = React.useContext(MovieContext);

    const movie = trending.find((movie) => movie.id === Number(id)) as Movie;

    return (
        <>
            <SectionProfile movie={movie} />
        </>
    );
};
