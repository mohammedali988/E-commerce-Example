import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typo from "../Typography";

const BobUpSubMenu = ({ SubMenuItems }) => {
  return (
    <Container>
      {SubMenuItems?.map((e, i) => {
        return (
          <SubMenuOption key={i}>
            <Link to={e.to} style={{ textDecoration: "none" }}>
              <Typo pointer={true} fontSize={"16px !important"} color={"white"}>
                {e.title}
              </Typo>
            </Link>
          </SubMenuOption>
        );
      })}
    </Container>
  );
};

export default BobUpSubMenu;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 25px;
  border-radius: 0.375rem;
  background-color: rgb(29 33 68);
  height: fit-content;
  width: 250px;
  position: absolute;
  top: 70px;
  z-index: 1000;
`;

const SubMenuOption = styled.div`
  color: white;
  opacity: 0.5;

  &: hover {
    opacity: 1;
  }
`;
