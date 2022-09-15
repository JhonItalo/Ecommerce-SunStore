import styled from "styled-components";

export const conteinerProduto = styled.div`
  margin: 2rem auto;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.grey};
`;
export const sectionVenda = styled.div`
  display: flex;
  gap: 6rem;
`;
export const favoritoCompra = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 1rem;
  .fav {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    color: grey;
    flex: none;
    border-radius: 50%;

    svg {
      font-size: 2rem;
    }
  }
`;
export const compra = styled.div``;
