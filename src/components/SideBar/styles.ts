import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.44);
`;

export const Container = styled.div`
  background: var(--white);
  position: fixed;
  height: 100%;
  right: 0;
  top: 0;
  width: 400px;
  z-index: 1;
`;

export const BoxClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 116px;
  border-bottom: 1px solid var(--black1);

  .CartTitle {
    display: flex;
  }

  h3 {
    margin-bottom: 0;
  }

  button {
    border: none;
    background: transparent;
  }

  button > svg {
    transition: 0.4s;
  }

  button > svg:hover {
    color: var(--gray1);
  }

  svg {
    font-size: 34px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const BoxProductEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: 539px;
  justify-content: center;

  > h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 16px;
    color: var(--black1);
  }

  > svg {
    font-size: 60px;
  }

  button {
    border: none;
    background: var(--gray2);
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 16px;
    color: var(--black1);
    height: 50px;
    width: 308px;
    transition: 0.4s;
  }

  button:hover {
    background: var(--gray1);
  }
`;
