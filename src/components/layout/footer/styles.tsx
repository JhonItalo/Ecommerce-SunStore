import styled from "styled-components";
export const Footer = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  background-color: ${({ theme }) => theme.colors.grey};
  span {
    margin-left: 0.2rem;
  }
`;
export const Redes = styled.div`
  font-size: 1.8rem;
  a {
    margin-right: 0.2rem;
  }
`;
