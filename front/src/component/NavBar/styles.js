import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ scrolled }) => (scrolled ? "rgba(29 33 68/ 0.7)" : "none")};
  z-index: 50;
  backdrop-filter: blur(6px);
`;

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1320px;

  @media (max-width: 1319px) {
    width: 1140px;
  }
  @media (max-width: 1140px) {
    width: 985px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;

  @media (max-width: 770px) {
    width: 50%;
  }
`;

export const NavAction = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
`;

export const NavActionMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin-left: 10px;
  cursor: pointer;

  &: hover {
    border: 2px solid rgb(81 66 252);
    border-radius: 10px;
  }

  @media (max-width: 770px) {
    margin-left: 5px;
    padding: 5px;
  }
`;

export const NavOption = styled.div`
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  color: white !important;
  align-items: center;
  justify-content: center;
  opacity: ${({ active }) => (active ? "1" : "0.6")};
  cursor: pointer;

  &: hover {
    opacity: 1;
  }

  @media (max-width: 1319px) {
    padding: 0 15px;
  }
`;

export const NavData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: white;
  width: 20%;
  @media (max-width: 1319px) {
    width: 50%;
  }
`;

export const Search = styled.div`
  opacity: 0.5;
  margin-right: 30px;
  cursor: pointer;

  &:hover {
    color: rgb(81 66 252);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
