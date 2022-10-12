import styled from "styled-components";
interface props {
  active: boolean;
}

export const MenuMobile = styled.div<props>`
  ${({ active }) => {
    if (active) {
      return `  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 0rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;
    }
  }}
  background-color: ${({ theme }) => theme.colors.grey};

  @media (min-width: 749px) {
    display: none;
  }
`;
export const Buttons = styled.div<props>`
  width: 95%;
  height: 6vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color: ${({ theme }) => theme.colors.grey};
  // background-color: blue;
  svg {
    font-size: 1.8rem;
    color: grey;
  }
  .menu {
    display: inline-flex;
    border: none;
  }
  .ConteinerBusca {
    display: ${({ active }) => (active ? "flex" : "none")};
  }
`;
export const Opcoes = styled.div<props>`
  display: ${({ active }) => (active ? "flex" : "none")};
`;
