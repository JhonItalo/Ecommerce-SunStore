import styled from "styled-components";

export const Topcategory = styled.section`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  //border: 1px solid yellow;
`;
export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  //border: 1px solid red;
`;
export const Itens = styled.div`
  width: 10.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  //border: 1px solid pink;
  span {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Cards = styled.a`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 1920px) and (min-width: 1441px) {
    height: 230px;
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 180px;
  }
  div {
    width: 94%;
    height: 94%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
