import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1320px;
  top: 70px;
  position: fixed;

  @media (max-width: 1319px) {
    width: 1140px;
  }
  @media (max-width: 1140px) {
    width: 985px;
  }
`;

export const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const Left = styled.div`
  display: flex;
  width: 45%;
`;
