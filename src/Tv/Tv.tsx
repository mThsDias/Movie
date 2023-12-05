import React from "react";

import { TvItem } from "./components/TvItem";
import { TvProvider } from "./context/TvContext";

export const Tv = () => {
  return (
    <TvProvider>
      <TvItem />
    </TvProvider>
  );
};
