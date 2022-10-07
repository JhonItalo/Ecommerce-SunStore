import styled from "styled-components";

export const Carrinho = styled.div`
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7rem;
    font-weight: bold;
    padding: 0.2rem;
    color: white;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.bege};
  }
`;
