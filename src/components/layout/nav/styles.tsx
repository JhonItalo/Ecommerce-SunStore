import styled from "styled-components";

interface propsLi {
  active?: string;
}

export const Nav = styled.nav`
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
`;
export const Navlink = styled.a`
  cursor: pointer;

  display: flex;
  gap: 0.1rem;

  svg {
    height: inherit;
  }
`;
