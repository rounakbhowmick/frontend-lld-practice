import styled from "styled-components";
import Grid from "../../common/Grid";

export const ProgressBarUIWrapper = styled(Grid)`
  width: 50%;
  .outer {
    width: 100%;
    border: 1px solid green;
    border-radius: 5px;
    overflow: hidden;
  }
  .inner {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    background-color: green;
    color: white;
    text-align: right;
    // transition: 0.5s ease-in;
    transition: transform 1s ease-in-out;
  }
`;
