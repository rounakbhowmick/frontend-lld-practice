import React from "react";
import Grid from "../../common/Grid";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const MemeCardSkeleton = () => {
  return (
    <Grid direction="row" wrap="wrap" gap="20px" justify="center">
      {Array.from({ length: 8 }).map((_, index) => (
        <Grid
          key={index}
          direction="column"
          style={{
            width: "500px",
            padding: "10px",
          }}
        >
          <Skeleton width={500} height={500} borderRadius={10} />
          <Skeleton width={300} height={20} style={{ marginTop: "10px" }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MemeCardSkeleton;
