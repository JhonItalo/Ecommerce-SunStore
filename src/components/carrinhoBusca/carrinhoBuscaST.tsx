import styled from "styled-components";

interface props {
  active: boolean;
}

export const icons = styled.div`
  display: flex;
  justify-content: baseline;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.8);
  svg {
    cursor: pointer;
  }
`;
export const busca = styled.div<props>`
  display: flex;
  justify-content: end;
  gap: 0.5rem;

  ${({ active }) => {
    if (active) {
      return `width: 25vw;
      padding: 0.1rem 0;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border: 1px solid black;
      border-radius: 2rem;
      `;
    }
  }}
  
  input {
    padding-left: 0.3rem;
    display: ${({ active }) => (active ? "block" : "none")};
    width: 90%;
    height: inherit;
    font-size: 1rem;
    background-color: inherit;
    border: none;
    outline: none;
    overflow: none;
  }
`;
export const favoritos = styled.div``;
export const carrinho = styled.div``;
