import { MovieContext } from "@/Movie/context/MovieContext";
import React, { useContext } from "react";

export const EnhancedDetails = () => {
  const { movie } = useContext(MovieContext);
  console.log({ movie });

  return (
    <div>
      <h1 style={{ color: "white" }}>Informações</h1>
    </div>
  );
};
