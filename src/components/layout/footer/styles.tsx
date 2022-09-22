import styled from "styled-components";
export const Footer = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};

  text-align: center;
  span {
    margin-left: 0.3rem;
  }
`;
