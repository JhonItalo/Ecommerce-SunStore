import styled from "styled-components";

export const Logo = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  color: ${({ theme }) => theme.colors.bege};
`;
