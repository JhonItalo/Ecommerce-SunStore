import styled from "styled-components";

export const Item = styled.li`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  //background-color: red;
  padding-right: 1rem;

  @media (max-width: 748px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const conteinerInfoFilme = styled.div`
  display: flex;
  gap: 1rem;
  //background-color: yellow;
  img {
    width: 120px;
    height: 170px;
  }
  p {
    font-size: 1.5rem;
  }
  span {
    color: grey;
    font-size: 0.9rem;
  }
  @media (max-width: 748px) {
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
      height: 350px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Buttons = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  button {
    background-color: white;
    border: 1px solid grey;
    font-weight: bold;
  }
  .cart {
    width: 100%;
    padding: 0.5rem;
    border-radius: 20px;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.bege};
    color: white;
  }
  @media (max-width: 748px) {
    gap: 0.5rem;
  }
`;
export const BtnMoreExcluir = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 48%;
    padding: 0.4rem;
    border-radius: 20px;
  }
  @media (max-width: 748px) {
    flex-direction: column;
    gap: 0.5rem;
    button {
      width: 100%;
    }
  }
`;
