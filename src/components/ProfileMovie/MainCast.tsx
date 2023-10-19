"use client";

import React from "react";
import * as S from "./styles";
import Image from "next/image";
import { MovieContext } from "@/context/ContextMovie";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Link from "next/link";

export const MainCast = () => {
  const { cast } = React.useContext(MovieContext);
  const [showBlur, setShowBlur] = React.useState(true);

  const showAllCast = false;
  const displayedCast = showAllCast ? cast : cast.slice(0, 7);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.target as HTMLDivElement;

    if (container.scrollLeft === 0) {
      setShowBlur(true);
    } else {
      setShowBlur(false);
    }
  };

  const id = cast.map((id) => id.id);

  return (
    <>
      <S.CustomBox>
        <S.InnerContainer onScroll={handleScroll}>
          {displayedCast.map((actor) => (
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
          {cast.length > 7 && !showAllCast && (
            <S.CastCompleted>
              <Link href={`/cast/${id}`}>
                Mostrar Mais <ArrowRightAltIcon />
              </Link>
              <S.EffectBlur style={{ opacity: showBlur ? 1 : 0 }} />
            </S.CastCompleted>
          )}
        </S.InnerContainer>
      </S.CustomBox>
    </>
  );
};
