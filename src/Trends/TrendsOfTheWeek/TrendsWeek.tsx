import React, { useContext } from "react";
import { TrendsContext } from "../context/TrendsContext";

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
    <div>
      {trendsWeek?.map((trendingItem) => (
        <div key={trendingItem.id}>
          <h1>{trendingItem.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${trendingItem.poster_path}`}
            alt={trendingItem.title}
          />
          <p>{trendingItem.overview}</p>
        </div>
      ))}
    </div>
  );
};
