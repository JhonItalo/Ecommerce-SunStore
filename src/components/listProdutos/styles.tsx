import styled from "styled-components";

export const ConteinerListProduts = styled.div`
  width: 70%;
  height: 215vh;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  h4 {
    margin-left: 2rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .infosAdicionais {
    margin-bottom: 1rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    span {
      font-weight: bold;
    }
    select {
      padding: 0.2rem 0.1rem;
      display: flex;
    }
  }
`;
export const ListProducts = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
`;
