import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
`;
export const ConteinerFilme = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 100px;

  img {
    width: 70px;
    height: 100%;
  }
`;
export const Informacoes = styled.div`
  height: 100%;
  flex: none;
  .text {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 1.2rem;
      letter-spacing: 4px;
    }
    .id {
      font-size: 0.9rem;
      color: grey;
    }
  }
`;
export const CountPrice = styled.div`
  display: flex;
  gap: 8rem;
`;
export const Count = styled.div`
  display: flex;
  margin-left: 2rem;
  p {
    padding: 0 0.5rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
  }
  button {
    padding: 0 0.4rem;
    font-size: 1rem;
  }
`;

export const Price = styled.div``;
