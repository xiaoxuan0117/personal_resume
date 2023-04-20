import styled from "styled-components";

export const SkillWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 26px;
`;

export const SkillContent = styled.div`
  position: relative;
  display: flex;
  gap: 23px;
  flex-direction: row;
  align-items: center;
`;

export const Left = styled.div`
  position: relative;
  width: 30%;
  font-size: 32px;
  font-weight: 700;
  text-align: end;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const Right = styled.div`
  position: relative;
  left: 50px;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > .skillItem {
    line-height: 30px;
  }
`;
