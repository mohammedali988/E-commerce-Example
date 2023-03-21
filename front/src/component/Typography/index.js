import React from "react";
import { Wrapper } from "./style";

const Typo = ({ variant, ...props }) => {
  return (
    <Wrapper variant={variant} {...props}>
      {props.children}
    </Wrapper>
  );
};

export default Typo;
