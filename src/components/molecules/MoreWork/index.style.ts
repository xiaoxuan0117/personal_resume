import styled from "styled-components";

export const MoreWorkWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 70px;
`;

export const MoreWorkContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  width: 100%;
`;

export const Left = styled.div`
  position: relative;
  width: 56px;

  & > img {
    position: relative !important;
  }
`;
export const Right = styled.div`
  position: relative;
  flex: 1;

  & > .title {
    position: relative;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;

    & > a {
      position: relative;
      text-decoration: none;
      color: ${(props) => props.theme.gray};

      ::before {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        content: "";
        width: 0px;
        height: 100%;
        background-color: ${(props) => props.theme.lightGray};
        transition: all 0.5s;
      }

      :hover {
        ::before {
          width: 100%;
        }
      }
    }
  }

  & > .moreWorkTags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 12px;

    & .tag {
      margin-right: 10px;
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
`;
