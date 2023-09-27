import React from "react";
import { Box } from "@mui/material";

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
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>
                {title}
                {name}
            </h1>
            <h4>{releaseDate || firstAirDate}</h4>
        </Box>
    );
};
