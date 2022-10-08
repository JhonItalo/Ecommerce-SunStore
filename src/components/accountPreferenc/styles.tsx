import styled from "styled-components";

export const AccPref = styled.div`
  display: flex;
  gap: 0.4rem;
`;
export const Icons = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  display: flex;
  gap: 0.1rem;
  justify-content: center;
  align-items: center;

  svg {
    height: 100%;
  }
  @media (max-width: 748px) {
    display: none;
  }
`;
