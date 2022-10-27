import styled from "styled-components";
export const Main = styled.main`
  width: 100%;
  padding: 2rem 0 5rem;
`;
export const Content = styled.div`
  width: 80%;
  padding: 1rem 2rem;
  border: 1px solid grey;
  margin: 0 auto;

  background-color: white;

  h2 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.bege};
  }
  h3 {
    margin: 1rem 0;
    color: ${({ theme }) => theme.colors.bege};
  }
`;
