"use client";
import React from "react";
import { MovieContext } from "@/context/ContextMovie";
import { Card } from "@/components/CardMovie/Card";
import { Slider, SliderProps, Slide } from "@/components/Slider/index";

export default function Home() {
    const { movies } = React.useContext(MovieContext);

    const settings: SliderProps = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination: { clickable: true },
    };

    return (
        <main>
            <h1>Home</h1>
            <div>
                <Slider settings={settings}>
                    {movies.map((movie) => (
                        <Slide key={movie.id}>
                            <Card movie={movie} />
                        </Slide>
                    ))}
                </Slider>
            </div>
        </main>
    );
}
