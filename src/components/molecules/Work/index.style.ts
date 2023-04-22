import styled from "styled-components";

export const WorkWrapper = styled.div`
  position: relative;
  width: 100%;
  height: max-content;
  margin-bottom: 200px;
`;

export const WorkContent = styled.div<{ index: number }>`
  position: relative;
  display: flex;
  justify-content: ${(props) =>
    props.index % 2 === 0 ? "flex-end" : "flex-start"};
  align-items: flex-end;
`;

export const Detail = styled.div<{ index: number }>`
  position: absolute;
  z-index: 5;
  left: ${(props) => props.index % 2 === 0 && "0"};
  right: ${(props) => props.index % 2 !== 0 && "0"};
  top: 200px;
  width: 319px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 8px;
  padding: 21px 26px;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.25);

  & > .title {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 3px;
  }

  & > .worksTags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;

    & .tag {
      font-size: 12px;
      margin: 3px 5px 3px 0;
    }
  }

  & > .dsc {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
    margin-bottom: 15px;
  }

  & > ul li {
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 20px;
  }

  & > .button {
    display: flex;
    justify-content: flex-end;

    & > a {
      text-decoration: none;
    }
  }
`;

export const Preview = styled.div<{ index: number }>`
  position: relative;
  box-sizing: border-box;
  width: 651px;
  height: 380px;
  padding: 12px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0 ${(props) => props.theme.darkShadow};

  ::before {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: -10px -10px 10px 0 ${(props) => props.theme.lightShadow};
  }

  & > .swiper {
    width: 100%;
    height: 100%;

    & > .swiper-pagination-bullet {
      background-color: ${(props) => props.theme.gray};
    }
  }

  & > a {
    text-decoration: none;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  ::after {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.5s;
  }

  & > img {
    transition: all 0.5s;
  }

  & > div {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.white};
    transition: all 0.5s;
  }

  :hover {
    ::after {
      background-color: ${(props) => props.theme.darkShadow};
    }

    & > img {
      scale: 1.1;
    }

    & > div {
      opacity: 1;
    }
  }
`;
