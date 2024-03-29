import React from "react";
import styled from "styled-components";
import Typo from "../Typography";
import { CardCont } from "./style";

const CoreCard = () => {
  return (
    <CardCont
      direction="column"
      align={"start"}
      pad={"1.75rem"}
      maBottom={"2.5rem"}
    >
      <IconCont>
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.79168 9.91671C7.22809 9.91671 6.68759 9.69282 6.28907 9.29431C5.89056 8.89579 5.66668 8.35529 5.66668 7.79171C5.66668 7.22812 5.89056 6.68762 6.28907 6.28911C6.68759 5.89059 7.22809 5.66671 7.79168 5.66671C8.35526 5.66671 8.89576 5.89059 9.29428 6.28911C9.69279 6.68762 9.91668 7.22812 9.91668 7.79171C9.91668 8.35529 9.69279 8.89579 9.29428 9.29431C8.89576 9.69282 8.35526 9.91671 7.79168 9.91671ZM30.3308 16.405L17.5808 3.65504C17.0708 3.14504 16.3625 2.83337 15.5833 2.83337H5.66668C4.09418 2.83337 2.83334 4.09421 2.83334 5.66671V15.5834C2.83334 16.3625 3.14501 17.0709 3.66918 17.5809L16.405 30.3309C16.9292 30.8409 17.6375 31.1667 18.4167 31.1667C19.1958 31.1667 19.9042 30.8409 20.4142 30.3309L30.3308 20.4142C30.855 19.9042 31.1667 19.1959 31.1667 18.4167C31.1667 17.6234 30.8408 16.915 30.3308 16.405Z"
            fill="#5142FC"
          ></path>
        </svg>
      </IconCont>
      <Typo
        variant={"h3"}
        height={"1.75rem"}
        weight={"700"}
        color={"white"}
        style={{ marginBlock: "0px" }}
      >
        List Them For Sale
      </Typo>
      <Typo
        variant={"p"}
        color={"rgb(161 160 174)"}
        fontSize={"1rem"}
        height={"1.5rem"}
      >
        Lorem ipsum dolor sit amet consectetur smit.
      </Typo>
    </CardCont>
  );
};

export default CoreCard;

const IconCont = styled.div`
  display: flex;
  width: 72px;
  height: 72px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  border-radius: 9999px;
  background-color: rgb(225 221 255);
`;
