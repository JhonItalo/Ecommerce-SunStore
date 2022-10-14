import styled from "styled-components";

export const icons = styled.div`
  display: flex;
  justify-content: baseline;
  gap: 0.5rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.8);
  svg {
    cursor: pointer;
    font-size: 1.8rem;
  }
  @media (max-width: 748px) {
    gap: 0.5rem;
    svg {
      font-size: 2rem;
    }
  }
`;
