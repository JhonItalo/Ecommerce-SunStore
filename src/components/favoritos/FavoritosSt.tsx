import styled from "styled-components";

export const Favoritos = styled.div`
  position: relative;

  span {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 0.1rem;
    color: white;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.bege};
  }
`;
