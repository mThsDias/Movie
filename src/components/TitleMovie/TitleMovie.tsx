import React from "react";

type TitleMovieProps = {
    title: string;
};

export const TitleMovie = ({ title }: TitleMovieProps) => {
    return (
        <div className="container-title">
            <h1
                style={{
                    color: "#000",
                    fontSize: "1.5rem",
                }}
            >
                {title}
            </h1>
        </div>
    );
};
