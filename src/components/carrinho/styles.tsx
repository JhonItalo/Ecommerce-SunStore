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
  @media (max-width: 748px) {
    span {
      width: 0.9rem;
      height: 0.9rem;
      font-size: 0.5rem;
    }
  }
`;
