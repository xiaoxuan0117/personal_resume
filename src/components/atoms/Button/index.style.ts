import styled from "styled-components";

export const ButttonWrapper = styled.div`
  position: relative;
  width: max-content;
  height: max-content;
  background-color: ${(props) => props.theme.primary};
  padding: 2px;
  border-radius: 18px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  line-height: 20px;
  color: ${(props) => props.theme.gray};
  vertical-align: center;
  box-shadow: 2px 2px 4px 0 ${(props) => props.theme.darkShadow};

  ::before {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 18px;
    box-shadow: -3px -3px 4px 0 ${(props) => props.theme.lightShadow};
  }
`;

export const ButtonContent = styled.div`
  position: relative;
  height: 100%;
  padding: 6px 36px;
  border-radius: 18px;

  :hover {
    background-color: ${(props) => props.theme.secondary};
    cursor: pointer;
  }

  ::selection {
    background-color: #e1e2db;
  }
`;
