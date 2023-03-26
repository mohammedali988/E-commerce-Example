import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width};
  border: 2px solid ${({ borderColor }) => borderColor || "white"};
  padding: ${({ padding }) => padding};
  border-radius: 0.375rem;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ bcColor }) => bcColor};
  color: white;
  margin-right: ${({ right }) => right || "20px"};
  height: ${({ height }) => height || "none"};

  &:hover {
    background-color: rgb(81 66 252);
    border: 2px solid rgb(81 66 252);
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
