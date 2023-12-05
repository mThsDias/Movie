import { PopularContext } from "@/Movie/context/PopularContext";
import React from "react";

export const Popular = () => {
  const { popular, error, loading } = React.useContext(PopularContext);
  console.log({ popular });

  return (
    <div>
      <h2>Popular</h2>
    </div>
  );
};
