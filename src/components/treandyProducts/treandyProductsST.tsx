import styled from "styled-components";
import { memo } from "react";

interface propsButton {
  active: boolean;
}
export const treandyProducts = styled.section`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid yellow;
`;
export const opcoes = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const button = styled.button<propsButton>`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};

  color: ${({ active }) => (active === true ? "white" : "rgba(0, 0, 0, 0.6)")};
  background-color: ${({ active, theme }) =>
    active === true ? theme.colors.bege : "white"};
`;
export const listProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;
export const itens = styled.div`
  width: 22%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
