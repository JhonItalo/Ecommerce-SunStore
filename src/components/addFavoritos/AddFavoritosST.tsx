import styled from "styled-components";

interface propsFav {
  active: boolean;
}

export const favorito = styled.div<propsFav>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;

  background-color: transparent;
  &:hover {
    background-color: white;
  }

  svg {
    font-size: 1.6rem;
    color: ${({ active }) => (active ? "red" : "white")};
  }
`;
