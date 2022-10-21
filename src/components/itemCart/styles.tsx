import styled from "styled-components";

export const FilmePrice = styled.div`
  display: flex;
  padding: 0 1rem 1rem 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
`;
export const ConteinerFilme = styled.div`
  display: flex;
  gap: 1rem;
  img {
    width: 70px;
    height: 100px;
  }
  .p {
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: grey;
  }
  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .text {
      .title {
        font-size: 1.2rem;
        letter-spacing: 4px;
      }
      .id {
        color: grey;
      }
    }

    .count {
      display: flex;
      margin-top: 1rem;
      p {
        padding: 0 0.5rem;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid black;
        border-top: 1px solid black;
      }
      button {
        padding: 0 0.4rem;
        font-size: 1.2rem;
      }
    }
  }
`;

export const Price = styled.div``;
