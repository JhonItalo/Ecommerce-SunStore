import styled from "styled-components";

interface propsItens {
  width: string;
  height: string;
  type: "s" | "l";
}
export const Itens = styled.div<propsItens>`
  position: relative;
  width: ${({ width }) => {
    return width;
  }};
  height: ${({ height }) => {
    return height;
  }};
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;

  .ConteinerImage {
    display: inline-flex;
    position: relative;
    width: 100%;
    height: 80%;
    background-color: black;
    a {
      display: inline-flex;
    }
    &:hover {
      border: 1px solid blue;
    }
    .fav {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;

      background-color: transparent;
      &:hover {
        background-color: white;
      }
      &:hover svg {
        color: red;
      }

      svg {
        font-size: 1.6rem;
        color: white;
      }
    }
  }

  @media (max-width: 1920px) and (min-width: 1441px) {
    ${({ type }) => {
      if (type === "s")
        return `height: 520px;
    gap: 0.5rem;`;
      else if (type === "l") return `height: 520px;`;
    }};
  }
  @media (max-width: 1440px) and (min-width: 1367px) {
    ${({ type }) => {
      if (type === "s")
        return `height: 400px;
    gap: 0.5rem; .ConteinerImage{ height: 75%;}`;
      else if (type === "l") return ` height: 420px;`;
    }};
  }
  @media (max-width: 1280px) and (min-width: 1000px) {
    ${({ type }) => {
      if (type === "s")
        return `height: 360px;
    .ConteinerImage{ height: 78%;}`;
      else if (type === "l") return `height: 360px;`;
    }};
  }
`;
export const TitleButtonCart = styled.div`
  p {
    cursor: default;
  }
  .cart {
    width: 100%;
    padding: 0.3rem 0;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 1px solid grey;
    background-color: white;

    &:hover {
      color: white;
      background-color: ${({ theme }) => theme.colors.bege};
    }
  }
`;
