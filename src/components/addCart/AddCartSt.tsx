import styled from "styled-components";

export const AddCart = styled.button`
  width: 100%;
  padding: 0.3rem 0;
  position: absolute;
  bottom: 0;
  left: 0%;
  border: 1px solid grey;

  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.bege};
  }
`;
