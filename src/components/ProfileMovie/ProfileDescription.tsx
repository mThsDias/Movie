import React from "react";
import * as S from "./styles";
import { Movie } from "@/context/movie/types";
import { MovieContext } from "@/context/ContextMovie";

type ProfileDescriptionProps = {
    movie: Movie;
};

export const ProfileDescription = ({ movie }: ProfileDescriptionProps) => {
    const { directors, screenplay, writer } = React.useContext(MovieContext);

    return (
        <>
            {movie && (
                <>
                    <S.SinopseContainer>
                        <h3>Sinopse</h3>
                        <p>{movie.overview}</p>
                    </S.SinopseContainer>
                    <S.CastContainer>
                        {directors && (
                            <div>
                                {directors.map((director) => (
                                    <div key={director.id}>
                                        <ul>
                                            <li>{director.name}</li>
                                            <h5>Diretor (a)</h5>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {screenplay && (
                            <div>
                                {screenplay.map((screenplay) => (
                                    <div key={screenplay.id}>
                                        <ul>
                                            <li>{screenplay.name}</li>
                                            <h5>Roteirista</h5>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}

                        {writer && (
                            <div>
                                {writer.map((writer) => (
                                    <div key={writer.id}>
                                        <ul>
                                            <li>{writer.name}</li>
                                            <h5>Escritor (a)</h5>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </S.CastContainer>
                </>
            )}
        </>
    );
};
