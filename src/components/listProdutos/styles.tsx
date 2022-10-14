import styled from "styled-components";

export const ConteinerListProduts = styled.div`
  width: 70%;
  height: 215vh;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  h3 {
    margin-left: 2rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .infosAdicionais {
    margin-bottom: 1rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: bold;
    }
    select {
      padding: 0.2rem 0.1rem;
      display: flex;
    }
  }
  @media (max-width: 748px) {
    width: 95%;
    height: 60vh;
    overflow: scroll;
    margin: 0 auto;
    padding: 0;
    gap: 0.5rem;
    border: none;
    //background-color: pink;
    h3 {
      margin: 0;
      font-size: 2rem;
    }
    .infosAdicionais {
      padding: 0;
      span {
        font-size: 1.2rem;
      }
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
  @media (max-width: 748px) {
    height: 50vh;
    padding: 1rem;
    margin: 0 auto;
    overflow-y: scroll;
    background-color: #e6e6e6;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      border: 1px solid black;
    }
    ::-webkit-scrollbar-thumb {
      background-color: white;
    }
  }
`;
