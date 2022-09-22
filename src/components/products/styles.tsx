import styled from "styled-components";

export const itens = styled.div`
  position: relative;
  width: 22%;
  height: 380px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  @media (max-width: 1920px) and (min-width: 1441px) {
    height: 520px;
    gap: 0.5;
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 400px;
    gap: 0.5rem;
  }
  @media (max-width: 1280px) and (min-width: 1000px) {
    height: 360px;
  }
`;
export const produtoImage = styled.div`
  display: inline-flex;
  position: relative;
  width: 100%;
  height: 80%;
  background-color: black;
  a {
    display: inline-flex;
  }
  &:hover {
    border: 1px solid blue;
  }
  .fav {
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
    &:hover svg {
      color: red;
    }

    svg {
      font-size: 1.6rem;
      color: white;
    }
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 75%;
  }
  @media (max-width: 1280px) and (min-width: 1000px) {
    height: 78%;
  }
`;
export const NomeCarrinho = styled.div`
  p {
    cursor: default;
  }
  .cart {
    width: 100%;
    padding: 0.3rem 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 1px solid grey;

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colors.bege};
    }
  }
`;
