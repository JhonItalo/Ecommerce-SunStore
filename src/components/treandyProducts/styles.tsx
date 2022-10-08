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
    justify-content: space-between;
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: scroll;
  @media (max-width: 748px) {
    flex-wrap: nowrap;
    gap: 1rem;
    .mediaQueryControlParentProduct {
      width: 150px;
      height: 300px;
      flex: none;
    }
  }
`;
