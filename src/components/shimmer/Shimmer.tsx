import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import type { Meme, MemeResponse } from "./type";
import Grid from "../../common/Grid";
import MemeCardSkeleton from "./MemeCardSkeleton";

const Shimmer = () => {
  const [memes, setMemes] = useState<MemeResponse | null>(null);
  const fetchMemes = async () => {
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data?.json();
    if (json) setMemes(json);
  };
  useEffect(() => {
    fetchMemes();
  }, []);
  return (
    <Grid direction="column" alignItems="center" gap="80px">
      <Grid
        style={{
          position: "sticky",
          width: "100%", // Make it span the full width
          top: "0px",
          background: "white",
        }}
        justify="center"
      >
        <h1>Shimmer</h1>
      </Grid>

      <Grid
        wrap="wrap"
        direction="row"
        gap="20px"
        justify="center"
        style={{ height: "100%" }}
      >
        {!memes ? (
          <MemeCardSkeleton />
        ) : (
          memes.memes?.map((meme, i) => <MemeCard meme={meme} key={i} />)
        )}
        {/* {memes &&
          memes.memes?.map((meme, i) => <MemeCard meme={meme} key={i} />)} */}
      </Grid>
    </Grid>
  );
};

export default Shimmer;
