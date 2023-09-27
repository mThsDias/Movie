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
                {/* Use a caixa para alinhar o conteúdo */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%", // Defina a altura para ocupar todo o espaço vertical
                    }}
                >
                    <ImageUrl images={posterPatch} />
                </div>
            </Grid>
        </Grid>
    );
};
