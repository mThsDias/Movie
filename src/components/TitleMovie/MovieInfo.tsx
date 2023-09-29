import React from "react";

type MovieInfoProps = {
    title: string;
    releaseDate: string;
    name: string;
    firstAirDate: string;
    voteAverage: number;
};

export const MovieInfo = ({
    title,
    releaseDate,
    name,
    firstAirDate,
    voteAverage,
}: MovieInfoProps) => {
    return (
        <div style={{ height: "100px", fontSize: "12px" }}>
            <span>{((voteAverage / 10) * 100).toFixed(0)}%</span>
            <h2
                style={{
                    whiteSpace: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {title}
                {name}
            </h2>
            <p>{releaseDate || firstAirDate}</p>
        </div>
    );
};
