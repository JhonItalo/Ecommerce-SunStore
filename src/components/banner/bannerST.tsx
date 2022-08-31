import styled from "styled-components";

export const conteinerBanner = styled.div`
  width: 100%;
  height: 70vh;
  margin-top: 1px;
  background-image: url("/assets/banner.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
`;

export const texto = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15%;

  p {
    font-size: 4rem;
    text-transform: uppercase;
    font-style: italic;
  }
  span {
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: 3px;
  }
  @media (min-width: 1367px) {
    top: 23%;
    p {
      font-size: 4.5rem;
    }
    span {
      font-size: 2rem;
    }
  }
`;
export const bannerLink = styled.a`
  width: 10rem;
  height: 2.5rem;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  box-sizing: content-box;
  border: 1px solid grey;
  background-color: ${({ theme }) => theme.colors.bege};

  :hover {
    filter: brightness(0.9);
  }
`;
