import styled from "styled-components";

export const AboutContentWrapper = styled.div`
  position: relative;
  width: 70%;

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const AboutContentFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 24px;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  position: relative;

  & > div {
    display: block;
    color: ${(props) => props.theme.gray};
    font-size: 20px;
    font-weight: 700;
    margin-top: 17px;
  }

  @media screen and (max-width: 600px) {
    & > div {
      position: relative;
      bottom: 5px;
      display: inline-block;
      margin: 0 0 0 20px;
    }
  }
`;

export const Right = styled.div`
  position: relative;
`;

export const Title = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 11px;
`;

export const Content = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;

  & > p {
    margin: 5px 0;
  }
`;
