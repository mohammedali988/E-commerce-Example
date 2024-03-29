import styled from "styled-components";

export const CardCont = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  padding: ${({ pad }) => pad || "1rem"};
  border-radius: 0.75rem;
  border: 2px solid rgba(229, 231, 235, 0.2);
  background-color: rgb(44 44 57);
  align-items: ${({ align }) => align || "center"};
  width: ${({ width }) => width || "23%"};
  margin-bottom: ${({ maBottom }) => maBottom || ""};

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
  height: ${({ height }) => height || "75px"};
  border-radius: 0.75rem;
  margin-right: ${({ MaRight }) => MaRight || "20px"};
  min-width: 32px;

  @media (max-width: 1315px) {
    margin-right: ${({ MaRight }) => MaRight || "10px"};
    height: ${({ height }) => height || "70px"};
  }
  @media (max-width: 990px) {
    margin-right: ${({ MaRight }) => MaRight || "15px"};
  }
  @media (max-width: 768px) {
    margin-right: ${({ MaRight }) => MaRight || "20px"};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ items }) => items || "start"};
  flex-grow: ${({ grow }) => grow || ""};
`;

export const ProductsImg = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const ProductsTitle = styled.div`
  display: flex;
  justify-items: flex-start;
  margin-bottom: 0.75rem;
  width: 100%;
`;

export const ProductsInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 1.25rem;
`;

export const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  color: rgb(255 255 255);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const CardAction = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgb(77 76 90);
  padding-top: 1.25rem;
  background-color: none;
  width: 100%;
`;

export const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;
  color: white;

  & :hover {
    cursor: pointer;
    color: blue !important;
  }
`;

export const ImageCont = styled.div`
  display:flex;
  flex-wrap
`;

export const ImageResp = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

export const ImageResCont = styled.li`
  cursor: pointer;
  height: 300px;
  position: relative;
  vertical-align: middle;
  border-radius: 5px;
  flex: 1 1 auto;
  width: 10px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border-radius: 5px;
`;
