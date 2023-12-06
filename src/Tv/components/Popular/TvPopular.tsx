import React, { useContext } from "react";

import * as S from "../../../Movie/components/Popular/styles";
import Link from "next/link";

import { ImageComponent } from "@/components/Image";
import { OverViewComponent } from "@/components/OverView";
import { TitleComponent } from "@/components/Title";
import { formatDate } from "@/functions";
import { DateComponent } from "@/components/Date";
import { PopularTvContext } from "@/Tv/context/PopularTv";

export const TvPopular = () => {
  const { popularTv, error, loading } = useContext(PopularTvContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <S.ContainerPopular>
        {popularTv?.map((item) => (
          <S.BoxPopularItems key={item.id}>
            <S.BoxImageAndPercentage>
              <ImageComponent img={item.poster_path} borderRadius={10} />
              <span>
                <OverViewComponent voteAverage={item.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link rel="preconnect" href={`/tv/${item.id}`}>
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
