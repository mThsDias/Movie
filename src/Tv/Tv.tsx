import React from "react";

import { TvItem } from "./components/TvItem";
import { TvProvider } from "./context/TvContext";

export const Movie = () => {
  return (
    <TvProvider>
      <TvItem />
    </TvProvider>
  );
};
