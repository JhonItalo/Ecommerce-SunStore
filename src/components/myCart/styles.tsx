import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: grey;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  padding-top: 1rem;
`;
export const Content = styled.div`
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  background-color: white;
  overflow: hidden;

  // background-color: rgba(200, 200, 170, 0.3);
  @media (max-width: 1920px) and (min-width: 1441px) {
    height: 70vh;
  }
  @media (max-width: 748px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const ConteinerShopCart = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0;

  .topic {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    //background-color: pink;
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
    padding: 1rem 1rem 0rem;
    //background-color: blue;
  }
`;
export const ListCart = styled.ul`
  width: 100%;
  height: 80%;
  margin-top: 1rem;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

  overflow-y: scroll;
  @media (max-width: 748px) {
    // background-color: red;
    height: 85%;
  }
`;
