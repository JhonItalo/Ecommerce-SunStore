import styled from "styled-components";

export const Category = styled.ul`
  width: 25%;
  border-top: 1px solid #e6e6e6;

  .fp {
    padding: 1rem 0;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 1px solid #e6e6e6;
  }
  .filtros {
    padding: 1rem 0;
    font-size: 1.3rem;
    text-transform: uppercase;
    font-weight: 400;
  }
  @media (max-width: 748px) {
    width: 100%;
    background-color: white;
    .fp,
    .filtros {
      padding-left: 1rem;
    }
  }
`;
export const SubCategory = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
  label {
    display: flex;
    justify-content: space-between;

    input {
      width: 1.5rem;
      background-color: inherit;
    }
  }
  @media (max-width: 748px) {
    padding-left: 1rem;
  }
`;
