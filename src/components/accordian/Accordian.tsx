import React, { useState } from "react";
import json from "./data.json";
import Grid from "../../common/Grid";
import List from "./List";
const Accordian = () => {
  const [data, setData] = useState(json);
  return (
    <Grid justify="center" alignItems="center" direction="column">
      <h1>File Folder explorer</h1>
      <List list={data} setData={setData} />
    </Grid>
  );
};

export default Accordian;

//Nested File Folder structure
//Add/Remove/Folder

// Doubts- Ask
// 1. How will we get the data - Ask interviewer?
