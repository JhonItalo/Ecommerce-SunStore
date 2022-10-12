import styled from "styled-components";

export const ConteinerBannerSecond = styled.section`
  width: 100%;
  height: 32.5vh;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  @media (max-width: 748px) {
    height: 20vh;
  }
`;
export const Item = styled.div`
  width: 49%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greyCard};

  .left {
    align-items: end;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-style: italic;

    p {
      font-size: 2rem;
    }
    .titleFirst {
      font-size: 1.5rem;
      font-style: normal;
    }
  }
  @media (max-width: 748px) {
    flex-direction: column;
    position: relative;
    padding: 0;
    align-items: none;
    justify-content: start;
    gap: 0.5rem;
    .left {
      align-items: inherit;
    }
    img {
      order: 2;
      width: 60%;
      height: 50%;
    }
    div {
      width: 100%;
      align-items: center;
      order: 1;
      p {
        font-size: 1rem;
      }
    }
  }
`;
export const BannerLink = styled.a`
  cursor: pointer;
  width: 7rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  border: 1px solid grey;
  background-color: ${({ theme }) => theme.colors.bege};

  :hover {
    filter: brightness(0.9);
  }
  @media (max-width: 748px) {
    position: absolute;
    width: 50%;
    height: 1.5rem;
    bottom: 0.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 0.7rem;
  }
`;
