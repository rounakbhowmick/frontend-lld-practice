import React from "react";
import Grid from "../../common/Grid";
import { HOME_ITEMS } from "./constant";
import { Card, Title } from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>LLD Practices</h1>

      {/* Using the Grid component as a container for the cards */}
      <Grid
        container
        gap="20px"
        wrap="wrap"
        direction="row"
        alignItems="center"
        justify="center"
      >
        {HOME_ITEMS.map((item) => (
          <Card key={item.id}>
            <Title>{item.title}</Title>
            <Link to={item.path}>Go to {item.title}</Link>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
