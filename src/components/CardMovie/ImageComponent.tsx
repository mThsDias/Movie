import React from "react";
import { Movie } from "@/context/movie/types";
import { Grid } from "@mui/material";
import { ImageUrl } from "./ImageUrl";

type ImageComponent = {
    posterPatch: Movie;
};

export const ImageComponent = ({ posterPatch }: ImageComponent) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: "300px", // Defina a largura máxima desejada
                        margin: "0 auto", // Centralize horizontalmente
                    }}
                >
                    <ImageUrl images={posterPatch} />
                </div>
            </Grid>
        </Grid>
    );
};
