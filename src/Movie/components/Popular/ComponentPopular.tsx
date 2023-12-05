import React, { useContext } from "react";

import * as S from "./styles";
import Link from "next/link";

import { PopularContext } from "@/Movie/context/PopularContext";
import { ImageComponent } from "@/components/Image";
import { OverViewComponent } from "@/components/OverView";
import { TitleComponent } from "@/components/Title";
import { formatDate } from "@/functions";
import { DateComponent } from "@/components/Date";

export const ComponentPopular = () => {
  const { popular, error, loading } = useContext(PopularContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <S.ContainerPopular>
        {popular?.map((item) => (
          <S.BoxPopularItems key={item.id}>
            <S.BoxImageAndPercentage>
              <ImageComponent
                img={item.poster_path}
                w={150}
                h={225}
                borderRadius={10}
              />
              <span>
                <OverViewComponent voteAverage={item.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link href={`/movies/${item.id}`}>
                <h2>
                  <TitleComponent title={item} />
                </h2>
              </Link>
              <p>
                <DateComponent
                  date={item.first_air_date || item.release_date}
                  formatDate={formatDate}
                />
              </p>
            </S.BoxTitleAndDate>
          </S.BoxPopularItems>
        ))}
      </S.ContainerPopular>
    </div>
  );
};
