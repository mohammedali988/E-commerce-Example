import styled from "styled-components";

export const CardCont = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  border: 2px solid rgba(229, 231, 235, 0.2);
  background-color: rgb(44 44 57);
  align-items: center;
  width: 24%;
  @media (max-width: 1315px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 1140px) {
    width: 32%;
  }
  @media (max-width: 990px) {
    width: 48%;
    padding: 1rem 1.5rem;
  }
  @media (max-width: 768px) {
    width: 99%;
    padding: 1rem 1.5rem;
  }
`;

export const ImgCont = styled.div`
  display: flex;
  height: 80px;
  border-radius: 0.75rem;
  margin-right: 20px;

  @media (max-width: 1315px) {
    margin-right: 10px;
    height: 70px;
  }
  @media (max-width: 990px) {
    margin-right: 15px;
  }
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
