import styled from "styled-components";

export const topcategory = styled.section`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border: 1px solid yellow;
`;
export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  border: 1px solid red;
`;
export const itens = styled.div`
  width: 10.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid pink;
  span {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const cards = styled.a`
  width: 100%;
  height: 24vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.2);

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
