import styled from "styled-components";

export const Main = styled.main`
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(200, 200, 170, 0.3);
  @media (max-width: 748px) {
    width: 100%;
  }
`;
export const Compra = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  // background-color: red;
  align-items: end;
  gap: 1rem;
  .btnComprar {
    margin-right: 2rem;
    width: 15%;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.bege};
    border: 1px solid rgba(30, 30, 30, 0.5);
    color: white;
    font-size: 1rem;
    &:hover {
      color: black;
    }
  }
`;
export const ListCart = styled.ul`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  @media (max-width: 748px) {
    width: 100%;
  }
`;
