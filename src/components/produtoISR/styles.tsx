import styled from "styled-components";

export const conteinerProduto = styled.div`
  margin: 1rem auto;
  width: 90%;
  height: 600px;
  padding: 1rem 1rem;
  display: flex;
  gap: 2rem;
  position: relative;
  background-color: rgba(200, 200, 170, 0.3);
  //background-color: blue;

  @media (max-width: 1920px) and (min-width: 1441px) {
    height: 800px;
  }

  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 650px;
  }
  @media (max-width: 1280px) and (min-width: 1000px) {
    height: 550px;
  }
  @media (max-width: 748px) {
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ConteinerImage = styled.div`
  position: relative;
  flex: none;
  width: 30%;
  height: 100%;
  overflow: none;

  @media (max-width: 748px) {
    width: 80%;
    height: 400px;
  }
`;

export const ConteinerInfos = styled.div`
  width: 65%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  // background-color: red;
  //border: 2px solid red;
  //background-color: white;
  @media (max-width: 748px) {
    width: 100%;
    height: 400px;
  }
`;

export const titles = styled.div`
  width: 90%;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.bege};
  .title {
    font-size: 3rem;
    filter: brightness(0.9);
  }
  .subtitle {
    font-size: 1.5rem;
    font-weight: bold;
  }
  @media (max-width: 748px) {
    width: 100%;
    text-align: center;
  }
`;
export const Descricao = styled.div`
  margin-bottom: 1rem;
  line-height: 1.5rem;
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
    background-color: white;

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
    background-color: white;

    &:hover {
      background-color: ${({ theme }) => theme.colors.bege};
      color: white;
    }
  }
`;

export const Nota = styled.div`
  display: inline-flex;
  position: absolute;
  top: 0;
  right: 0;

  p {
    font-size: 3.5rem;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
  }
  svg {
    font-size: 2rem;
    color: yellow;
  }
  @media (max-width: 748px) {
    display: none;
  }
`;
