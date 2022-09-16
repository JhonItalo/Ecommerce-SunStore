import styled from "styled-components";

export const itens = styled.div`
  position: relative;
  width: 22%;
  height: 380px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  background-color: red;
  .produtoName {
    cursor: default;
  }
  @media (max-width: 1920px) and (min-width: 1441px) {
    height: 520px;
    gap: 0.5;
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 420px;
    gap: 0.5rem;
  }
`;
export const produtoImage = styled.div`
  display: inline-flex;
  position: relative;
  width: 100%;
  height: 82%;
  background-color: black;
  a {
    display: inline-flex;
  }
  &:hover {
    border: 1px solid blue;
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    height: 78%;
  }
  @media (max-width: 1280px) and (min-width: 1000px) {
    height: 80%;
  }
`;
/*
 
 
 
  @media (max-width: 1280px) {
    height: 360px;
  }*/
