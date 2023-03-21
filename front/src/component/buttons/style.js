import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width};
  border: 2px solid ${({ borderColor }) => borderColor || "white"};
  padding: ${({ padding }) => padding};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ bcColor }) => bcColor};
  color: white;

  &:hover {
    background-color: rgb(81 66 252);
    border: none;
    cursor: pointer;
    transition: 0.3s;
  }

  @media (max-width: 1140px) {
    width: 250px;
    padding: 0 10px;
  }

  @media (max-width: 776px) {
    width: 200px;
    padding: 0 5px;
  }
`;
