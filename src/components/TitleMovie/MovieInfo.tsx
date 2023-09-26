import React from "react";
import "./MovieInfo.css";

type MovieInfoProps = {
    title: string;
    releaseDate: string;
    name: string;
    firstAirDate: string;
};

export const MovieInfo = ({
    title,
    releaseDate,
    name,
    firstAirDate,
}: MovieInfoProps) => {
    return (
        <div className="container-description">
            <h4>{title}</h4>
            <h4>{name}</h4>
            <h5>{releaseDate || firstAirDate}</h5>
        </div>
    );
};
