import styled from "styled-components";

export const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 200px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;
