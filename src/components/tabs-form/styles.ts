import styled from "styled-components";
import Grid from "../../common/Grid";

export const TabFormWrapper = styled(Grid)`
  .active-container {
    border: 1px solid black;
    width: 90%;
    height: 500px;
  }
  .tabs {
    cursor: pointer;
  }
  .errors {
    color: red;
  }
`;
