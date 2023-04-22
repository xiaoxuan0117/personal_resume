import styled from "styled-components";

export const SkillsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 200px;
  padding-top: 76px;

  & ::selection {
    background-color: #e1e2db;
  }
`;

export const SkillsContent = styled.div`
  position: relative;
  width: 70%;
  margin-bottom: 11px;
`;

export const Title = styled.div`
  position: relative;
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
`;
