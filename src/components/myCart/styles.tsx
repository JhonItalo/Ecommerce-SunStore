import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  background-color: grey;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
`;
export const Content = styled.div`
  width: 80%;
  height: 90vh;
  margin: 0 auto;
  display: flex;
  background-color: white;
  overflow: hidden;
  // background-color: rgba(200, 200, 170, 0.3);
  @media (max-width: 748px) {
    width: 100%;
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
  //background-color: brown;
  overflow-y: scroll;
  @media (max-width: 748px) {
    width: 100%;
  }
`;
