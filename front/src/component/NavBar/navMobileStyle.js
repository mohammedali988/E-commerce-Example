import styled from "styled-components";

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  width: 1320px;

  @media (max-width: 1319px) {
    width: 1140px;
  }
  @media (max-width: 1140px) {
    width: 985px;
  }
`;

export const MobileCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 768px;

  @media (max-width: 768px) {
    width: 575px;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;

  @media (max-width: 770px) {
    width: 50%;
  }
`;

export const NavActionMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin-left: 10px;
  cursor: pointer;

  &: hover {
    border-radius: 10px;
  }

  @media (max-width: 770px) {
    margin-left: 5px;
    padding: 5px;
  }
`;

export const NavData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  width: 50%;
  @media (max-width: 775px) {
    width: 70%;
    justify-content: flex-end;
  }
`;
