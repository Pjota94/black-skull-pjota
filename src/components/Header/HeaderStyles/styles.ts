import styled from "styled-components";

export const Container = styled.div`
  height: 72px;
  background-color: var(--black1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 166px;
    height: 32px;
  }

  nav {
    display: flex;
  }

  nav > a {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: var(--gray1);
    height: 72px;
    display: flex;
    align-items: center;
    padding-left: 13.5px;
    padding-right: 13.5px;
  }

  nav > a:hover {
    color: var(--white);
    background-color: var(--dark3);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 16px;

  button {
    border: none;
    background-color: transparent;
  }

  svg {
    font-size: 24px;
    color: var(--gray1);
    transition: 0.4s;
  }

  svg:hover {
    color: var(--white);
  }
`;
