import React from "react";
import Grid from "../../common/Grid";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MemeCardSkeleton = () => {
  const cardWidth = 500;
  const cardHeight = 500;
  const borderRadius = 10;
  const marginTop = 10;

  return (
    <Grid
      direction="row"
      wrap="wrap"
      gap="20px"
      justify="center"
      style={{ width: "100%" }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <Grid
          key={index}
          direction="column"
          style={{
            width: `${cardWidth}px`,
            padding: `${marginTop}px`,
          }}
        >
          <Skeleton
            width={cardWidth}
            height={cardHeight}
            borderRadius={borderRadius}
          />
          <Skeleton
            width={cardWidth * 0.6}
            height={20}
            style={{ marginTop: `${marginTop}px` }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MemeCardSkeleton;
