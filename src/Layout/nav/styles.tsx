import styled from "styled-components";
interface propsNav {
  mobile?: boolean;
}

interface propsLi {
  active?: string;
}

export const Nav = styled.nav<propsNav>`
  width: 100%;
  height: 6.5vh;
  font-weight: 500;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};

  ul {
    height: inherit;
    display: flex;
    gap: 1.5rem;
  }
  @media (max-width: 748px) {
    display: ${({ mobile }) => (mobile ? "flex" : "none")};
    width: 100%;
    height: 100%;
    background-color: white;
    ul {
      width: 100%;
      flex-direction: column;
      gap: 0;
    }
  }
`;
export const Li = styled.li<propsLi>`
  height: inherit;
  padding-left: 0.2rem;
  display: flex;
  align-items: center;
  border-bottom: ${({ active }) => (active ? "2px solid #BAAA55" : "")};

  &:hover {
    color: ${({ theme }) => theme.colors.bege};
  }
  @media (max-width: 748px) {
    height: auto;
    border-bottom: 1px solid black;
    padding: 1rem;
    background: ${({ active, theme }) => (active ? theme.colors.bege : "white")};
    color: ${({ active }) => (active ? "white" : "black")}!important;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const Navlink = styled.a`
  cursor: pointer;

  display: flex;
  gap: 0.1rem;

  svg {
    height: inherit;
  }
`;
