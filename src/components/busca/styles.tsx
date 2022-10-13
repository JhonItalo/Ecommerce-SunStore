import styled from "styled-components";

interface props {
  active: boolean;
  mobile?: boolean;
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
    padding-left: 1rem;
    display: ${({ active }) => (active ? "block" : "none")};
    flex-direction: column;
    justify-content: end;
    position: absolute;
    top: 102%;
    left: 5%;
    overflow-y: auto;
    z-index: 2;
    li {
      padding-left: 0.3rem;
      font-size: 1.23rem;
      border-left: 1px solid grey;
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
  @media (max-width: 748px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    ${({ active }) => {
      if (active) {
        return ` 
      width: 80%;
      `;
      }
    }};
  }
  .listFilmes {
    top: 105%;
    left: 0;
  }
`;
