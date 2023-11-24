import { CastContext } from "@/Movie/context/CastContext";
import Image from "next/image";
import React, { useContext } from "react";
import * as S from "./styles";

export const CastMovie = () => {
  const { cast, error, loading } = useContext(CastContext);
  console.log(cast);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Elenco</h1>
      <S.Teste>
        {cast &&
          cast.slice(0, 5).map((c) => (
            <div key={c.id}>
              <div>
                <Image
                  src={`https://image.tmdb.org/t/p/original${c.profile_path}`}
                  alt={"Cast"}
                  width={140}
                  height={200}
                  style={{ borderRadius: "10px" }}
                  priority
                />
              </div>
              <p>{c.name}</p>
              <p>{c.character}</p>
            </div>
          ))}
      </S.Teste>
    </div>
  );
};
