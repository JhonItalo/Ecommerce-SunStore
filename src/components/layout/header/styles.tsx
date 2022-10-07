import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 9vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyBorder};
  background-color: ${({ theme }) => theme.colors.grey};
`;
export const Content = styled.div`
  width: 80%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

`;
