import React, { useEffect, useState } from "react";
import Grid from "../../common/Grid";
import { ProgressBarUIWrapper } from "./styles";

const ProgressBar = () => {
  const progress_bar = [1, 5, 10, 15, 30, 50, 100];

  const [progress, setProgress] = useState(Array(progress_bar.length).fill(0));

  useEffect(() => {
    setTimeout(() => {
      setProgress(progress_bar);
    }, 100);
  }, []);
  return (
    <ProgressBarUIWrapper direction="column">
      <h1>Progress bar</h1>
      <Grid direction="column" gap="10px">
        {progress.map((progress, index) => (
          <Grid className="outer" key={index}>
            <div
              className="inner"
              style={{
                transform: `translateX(${progress - 100}%)`,
                background: progress < 5 ? "black" : "",
              }}
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {progress < 5 ? "" : `${progress}%`}
            </div>
          </Grid>
        ))}
      </Grid>
    </ProgressBarUIWrapper>
  );
};

export default ProgressBar;
