import styled from "styled-components";

export const ConteinerShop = styled.div`
  width: 90%;
  height: 230vh;
  margin: 1rem auto;
  h2 {
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: 748px) {
    width: 100%;
    height: auto;
    padding-bottom: 3rem;
    //background-color: red;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  @media (max-width: 748px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    //background-color: blue;
  }
`;
