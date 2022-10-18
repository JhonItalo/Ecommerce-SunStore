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
  //background-color: #e6e6e6;
  @media (max-width: 748px) {
    width: 100%;
  }
`;
export const ListFav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 748px) {
    width: 100%;
    // background-color: red;
  }
`;
