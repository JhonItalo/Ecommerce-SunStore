import styled from "styled-components";

export const title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;

  h2 {
    font-size: 1.4rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 700;
  }
  @media (max-width: 748px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
export const Itens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  div {
    width: 3rem;
    height: 1px;
    background-color: black;
  }
  span {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.begeTitleSection};
  }
`;
