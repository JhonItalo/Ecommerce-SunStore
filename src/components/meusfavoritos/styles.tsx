import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: grey;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  padding-top: 1rem;
  @media (max-width: 748px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
export const Content = styled.div`
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  background-color: white;
  overflow: hidden;
  @media (max-width: 1920px) and (min-width: 1441px) {
    height: 70vh;
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 80vh;
  }
  @media (max-width: 1280px) and (min-width: 1000px) {
    height: 85vh;
  }
  @media (max-width: 748px) {
    width: 100%;
    margin: 0;
  }
`;

export const ConteinerFav = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0;
  //background-color: yellow;

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
  @media (max-width: 748px) {
    width: 100%;
    margin: 0;
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
  // background-color: orange;
  @media (max-width: 748px) {
    width: 100%;
    gap: 3rem;
    padding: 2rem 0;
  }
`;
