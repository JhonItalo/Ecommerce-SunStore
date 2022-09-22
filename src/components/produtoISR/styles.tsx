import styled from "styled-components";

export const conteinerProduto = styled.div`
  margin: 2rem auto;
  width: 90%;
  height: 90vh;
  padding: 1rem 1rem;
  display: flex;
  gap: 4rem;
  background-color: ${({ theme }) => theme.colors.grey};

  /* @media (max-width: 1440px) and (min-width: 1367px) {
    height: 80vh;
  }*/
`;
export const ConteinerImage = styled.div`
  position: relative;
  flex: none;
  width: 30%;
  height: 100%;
  overflow: none;
  border: 2px solid red;
`;

export const ConteinerInfos = styled.div`
  width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid red;
`;

export const titles = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.bege};
  .title {
    font-size: 3rem;
    filter: brightness(0.9);
  }
  .subtitle {
    font-size: 1.5rem;
    font-weight: bold;
    //filter: brightness(0.7);
  }
`;
export const Descricao = styled.div`
  margin-bottom: 1rem;
`;

export const genero = styled.div`
  margin-bottom: 1rem;
  display: flex;
  .genre {
    margin-right: 0.5rem;
  }
`;
export const Producao = styled.div``;

export const buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  bottom: 0;

  .cart {
    font-family: "serif";
    font-size: 1rem;
    width: 100%;
    padding: 1rem 0;
    border: 1px solid black;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bege};
      color: white;
    }
  }
  .fav {
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bege};
      color: white;
    }
  }
`;
