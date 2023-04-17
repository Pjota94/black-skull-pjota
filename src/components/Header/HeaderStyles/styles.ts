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

export const DivDropBox = styled.div`
  &&:hover {
    main {
      display: flex;
      border-top: 1px solid rgba(82, 76, 76, 0.4);
    }

    a {
      background-color: var(--dark3);
      color: var(--white);
    }
    a::after {
      width: 100%;
    }
  }

  > a {
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
    position: relative;
  }

  > a::after {
    content: "";
    width: 0%;
    height: 4px;
    background-color: var(--orange1);
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.3s ease-in-out;
  }
`;

export const CircleQuantity = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  background-color: var(--orange1);
  position: relative;
  left: -25px;
  top: -6px;
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    text-transform: uppercase;
    text-align: center;
  }
`;
