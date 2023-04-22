import styled from "styled-components";

export const WorksWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
  padding-top: 76px;

  & ::selection {
    background-color: #e1e2db;
  }
`;

export const WorksContent = styled.div`
  position: relative;
  width: 70%;
`;

export const Title = styled.div`
  position: relative;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 44px;
`;
