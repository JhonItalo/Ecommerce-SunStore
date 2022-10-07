import styled from "styled-components";

interface props {
  active: boolean;
}

export const ConteinerBusca = styled.div<props>`
  position: relative;

  ${({ active }) => {
    if (active) {
      return ` display: flex;
      align-items: center;
      justify-content: end;
      alli
      gap: 0.5rem;
      width: 25vw;
      padding: 0.1rem 0;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border: 1px solid black;
      border-radius: 2rem;
      background: white;
      `;
    }
  }}

  input {
    width: 90%;
    height: 80%;
    display: ${({ active }) => (active ? "block" : "none")};
    padding-left: 0.3rem;
    font-size: 1rem;
    border-radius: 10%;
    border: none;
    outline: none;
    overflow: none;
    background-color: inherit;
  }
  .listFilmes {
    width: 90%;
    height: 50vh;
    display: ${({ active }) => (active ? "block" : "none")};
    flex-direction: column;
    justify-content: end;
    position: absolute;
    top: 102%;
    left: 5%;
    overflow-y: auto;
    z-index: 1;
    li {
      padding: 3px 0;
      font-size: 1.23 rem;
      border-left: 1px solid black;
      border-bottom: 1px solid black;
      background-color: white;
      :hover {
        background-color: ${({ theme }) => theme.colors.bege};
        color: white;
      }
    }
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background: white;
      border: 1px solid #e6e6e6;
    }
    ::-webkit-scrollbar-thumb {
      background: #e6e6e6;
      border-radius: 20%;
    }
  }
`;
