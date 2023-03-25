import styled from "styled-components";

const getTypoSize = (variant) => {
  switch (variant) {
    case "h1":
      return "1.8em";
    case "h2":
      return "1.3em";
    case "h3":
      return "1em";
    case "h4":
      return ".8em";
    case "h5":
      return ".5em";
    case "h6":
      return "0.4em";
    default:
      return "1em";
  }
};

export const Wrapper = styled.p`
  font-weight: ${({ weight }) => weight || "500"};
  color: ${(props) =>
    props ? props.color : props.theme ? props.theme.Typography.color : "white"};
  font-size: ${(props) => props?.fontSize || getTypoSize(props?.variant || "")};
  line-height: ${({ height }) => height || ""};
  font-family: ${(props) => props?.["font-family"] || "inter,sans-serif"};
  font-size: ${(props) =>
    props?.["font-Size"] || getTypoSize(props?.variant || "")};
  text-align: ${(props) => props?.["text-align"] || "left"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "")};
  opacity: ${({ opacity }) => opacity || "1"};

  @media (max-width: 1315px) {
    font-size: ${(props) => (props?.variant === "h1" ? "40px !important" : "")};
  }
  @media (max-width: 1140px) {
    font-size: ${(props) => (props?.variant === "h1" ? "37px !important" : "")};
  }
`;
