import React, { useContext } from "react";

import Image from "next/image";
import * as S from "../../../Movie/components/Cast/styles";

import { CastTvContext } from "@/Tv/context/CastTvContext";

export const CastTv = () => {
  const { castTv, error, loading } = useContext(CastTvContext);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <S.SectionCast>
      <h1>Elenco</h1>
      <S.BoxCast>
        {castTv &&
          castTv.slice(0, 5).map((c) => (
            <div key={c.id}>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/original${c.profile_path}`}
                  alt={"Cast"}
                  width={150}
                  height={225}
                  style={{ borderRadius: "10px" }}
                  priority
                />
              </div>
              <S.BoxCastP>
                <p>{c.name}</p>
              </S.BoxCastP>
            </div>
          ))}
      </S.BoxCast>
    </S.SectionCast>
  );
};
