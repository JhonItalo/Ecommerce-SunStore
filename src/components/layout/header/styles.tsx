import styled from "styled-components";

export const header = styled.header`
  width: 100%;
  height: 9vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyBorder};
  background-color: ${({ theme }) => theme.colors.grey};
`;
export const content = styled.div`
  width: 80%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  .logo {
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: inline-block;
      color: ${({ theme }) => theme.colors.bege};
    }
  }
`;
