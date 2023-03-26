import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1320px;
  top: 70px;

  @media (max-width: 1319px) {
    width: 1140px;
  }
  @media (max-width: 1140px) {
    width: 985px;
  }
  @media (max-width: 992px) {
    width: 760px;
  }
  @media (max-width: 770px) {
    width: 570px;
  }
  @media (max-width: 590px) {
    width: 500px;
  }
`;

export const MainCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    width: 100%;
  }
  @media (max_width: 590px) {
    width: 100%;
    align-items: center;
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;

  @media (max-width: 992px) {
    width: 70%;
  }
`;

export const Left = styled.div`
  display: flex;
  width: 45%;

  @media (max-width: 992px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const SectionsCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  padding: 1px;

  @media (max-width: 540px) {
    width: 92%;
  }
`;

export const SectionsTitle = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(229, 231, 235, 0.1);
  margin-bottom: 50px;
  justify-content: space-between;
`;

export const LeftTitle = styled.div`
  display: flex;
`;

export const RightTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  justify-content: flex-end;
`;

export const SectionsBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: ${({ wrap }) => wrap || ""};
`;
