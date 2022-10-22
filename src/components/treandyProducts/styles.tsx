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
  @media (max-width: 748px) {
    padding: 0;
  }
`;
export const Opcoes = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 748px) {
    width: 100%;
    justify-content: space-around;
    padding: 0 1rem;
  }
`;

export const Button = styled.button<propsButton>`
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.greyBorder};

  color: ${({ active }) => (active === true ? "white" : "rgba(0, 0, 0, 0.6)")};
  background-color: ${({ active, theme }) => (active === true ? theme.colors.bege : "white")};
  @media (max-width: 748px) {
  }
`;
export const ListProducts = styled.div`
  background-color: rgba(200, 200, 170, 0.3);
  padding: 2rem 1.5rem 1rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: none;
  @media (max-width: 748px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
    gap: 2rem;
    .mediaQueryControlParentProduct {
      width: 150px;
      height: 300px;
      flex: none;
    }
  }
`;
