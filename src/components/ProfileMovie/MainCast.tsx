"use client";

import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { MovieContext } from "@/context/ContextMovie";

export const MainCast = () => {
  const { cast } = React.useContext(MovieContext);

  return (
    <>
      <S.CustomBox>
        <S.InnerContainer>
          {cast &&
            cast.map((actor) => (
              <S.ContentMovie key={actor.id}>
                <S.ContentCast>
                  <Image
                    src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                    alt={actor.name}
                    width={150}
                    height={210}
                    style={{
                      borderTopLeftRadius: ".5rem",
                      borderTopRightRadius: ".5rem",
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    placeholder="blur"
                    blurDataURL={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                  />
                  <section>
                    <div>
                      <h3>{actor.name}</h3>
                      <p>{actor.character}</p>
                    </div>
                  </section>
                </S.ContentCast>
              </S.ContentMovie>
            ))}
        </S.InnerContainer>
      </S.CustomBox>
    </>
  );
};
