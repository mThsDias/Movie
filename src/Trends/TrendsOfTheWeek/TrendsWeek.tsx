import React, { useContext } from "react";

import * as S from "../styles";
import Link from "next/link";

import { formatDate } from "@/functions";
import { generateLink } from "@/functions/generateLink";
import { TrendsContext } from "../context/TrendsContext";
import { OverViewComponent } from "@/components/OverView";
import { DateComponent } from "@/components/Date";
import { ImageComponent } from "@/components/Image";
import { TitleComponent } from "@/components/Title";

export const TrendsWeek = () => {
  const { trendsWeek, loadingTrendsWeek, errorTrendsWeek } =
    useContext(TrendsContext);

  if (loadingTrendsWeek) {
    return <p>Loading...</p>;
  }

  if (errorTrendsWeek) {
    return <p>{errorTrendsWeek}</p>;
  }

  return (
    <section>
      <S.ContainerItem>
        {trendsWeek?.map((weekItem) => (
          <S.BoxItems key={weekItem.id}>
            <S.BoxImageAndPercentage>
              <ImageComponent
                img={weekItem.poster_path}
                w={150}
                h={225}
                borderRadius={10}
              />
              <span>
                <OverViewComponent voteAverage={weekItem.vote_average} />
              </span>
            </S.BoxImageAndPercentage>
            <S.BoxTitleAndDate>
              <Link href={generateLink(weekItem.id, weekItem.media_type)}>
                <h2>
                  <TitleComponent title={weekItem} />
                </h2>
              </Link>
              <p>
                <DateComponent
                  date={weekItem.first_air_date || weekItem.release_date}
                  formatDate={formatDate}
                />
              </p>
            </S.BoxTitleAndDate>
          </S.BoxItems>
        ))}
      </S.ContainerItem>
    </section>
  );
};
