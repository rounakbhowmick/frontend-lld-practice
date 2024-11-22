import React from "react";
import type { Meme } from "./type";
import Grid from "../../common/Grid";

const MemeCard: React.FC<{ meme: Meme }> = ({ meme }) => {
  console.log("meme", meme);
  const { url, title, author } = meme;
  return (
    <Grid direction="column">
      <img src={url} alt="meme" width={"500px"} height={"500px"} />
      <p>{author}</p>
    </Grid>
  );
};

export default MemeCard;
