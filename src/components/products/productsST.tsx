import styled from "styled-components";
interface propsFav {
  active: boolean;
}

export const itens = styled.div`
  position: relative;
  width: 22%;
  height: 380px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  // background-color: red;
  p {
    padding: 0rem 0.6rem;
    cursor: default;
  }
  button {
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
  }
`;
export const produtoImage = styled.div`
  display: inline-flex;
  position: relative;
  background-color: red;
  a {
    display: inline-flex;
  }
  &:hover {
    border: 1px solid blue;
  }
`;

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
export const titleButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background-color: green;
  p {
    padding: 0rem 0.6rem;
  }
  button {
    width: 60%;
    padding: 0.2rem 0;
    border-radius: 10px;
  }
`;
