import React from "react";
import { MovieContext } from "@/context/ContextMovie";

import { RunTime } from "./RunTime";
import { Genres } from "./Genres";

export const ProfileInformation = () => {
  const { information } = React.useContext(MovieContext);
  console.log({ information });

  return (
    <>
      <RunTime info={information} />
      <Genres info={information} />
    </>
  );
};
