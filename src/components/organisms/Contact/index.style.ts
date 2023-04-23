import styled from "styled-components";

export const ContactWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;

  & ::selection {
    background-color: #e1e2db;
  }
`;

export const ContactContent = styled.div`
  position: relative;
  margin-bottom: 11px;
`;

export const Title = styled.div`
  position: relative;
  right: 100px;
  text-align: end;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 40px;
    right: 80px;
  }
`;
