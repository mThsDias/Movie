import "react-circular-progressbar/dist/styles.css";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

type PercentageRoundedProps = {
  voteAverage: number;
};

export function PercentageRounded({ voteAverage }: PercentageRoundedProps) {
  const [color, setColor] = React.useState("#f7f4f8");

  React.useEffect(() => {
    if (voteAverage >= 7) {
      setColor("#21d07a");
    } else if (voteAverage <= 7) {
      setColor("#D2D531");
    } else if (voteAverage <= 6) {
      setColor("#FFC324");
    } else if (voteAverage <= 5) {
      setColor("#FF0000");
    }
  }, [voteAverage]);

  const percentage = parseFloat(((voteAverage / 10) * 100).toFixed(0));

  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={7}
        styles={buildStyles({
          backgroundColor: "#081c22",
          textColor: "#fff",
          pathColor: color,
          trailColor: "#1a3b28",
          textSize: "1.8rem",
        })}
      />
    </>
  );
}
