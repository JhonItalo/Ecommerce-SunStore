import styled from "styled-components";

interface propsButton {
  active: boolean;
}
export const TreandyProducts = styled.section`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  background-color: rgba(200, 200, 170, 0.3);
`;
export const Opcoes = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Button = styled.button<propsButton>`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};

  color: ${({ active }) => (active === true ? "white" : "rgba(0, 0, 0, 0.6)")};
  background-color: ${({ active, theme }) =>
    active === true ? theme.colors.bege : "white"};
`;
export const ListProducts = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
`;
