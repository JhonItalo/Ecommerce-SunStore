import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: grey;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  padding-top: 1rem;
  @media (max-width: 748px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  background-color: white;
  overflow: hidden;
`;

export const ConteinerFav = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0;

  .topic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    margin-bottom: 1rem;
    .vazio {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ListFav = styled.ul`
  overflow-y: scroll;
  padding: 1rem 0;
  display: flex;
  height: 80%;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  @media (max-width: 748px) {
    width: 100%;
  }
`;
