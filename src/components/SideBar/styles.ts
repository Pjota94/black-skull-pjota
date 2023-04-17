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

export const ContainerCart = styled.div`
  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  h5 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 16px;
    color: var(--black1);
    margin-left: 20px;
  }

  span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 16px;
    color: var(--orange1);
    margin-right: 20px;
  }

  .btn-buy {
    border: none;
    background: var(--orange1);
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 16px;
    color: var(--black1);
    height: 50px;
    width: 360px;
    transition: 0.4s;
    margin-left: 20px;
    margin-bottom: 10px;
  }

  .btn-buy:hover {
    background: var(--orange2);
  }

  > button {
    border: none;
    background: var(--gray2);
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 16px;
    color: var(--black1);
    height: 50px;
    width: 360px;
    transition: 0.4s;
    margin-left: 20px;
  }

  > button:hover {
    background: var(--gray1);
  }
`;

export const BoxProduct = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  overflow-y: scroll;
  height: 303px;
  flex-flow: wrap;
  margin-top: 30px;
  margin-right: 10px;

  &&::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  &&::-webkit-scrollbar-thumb {
    background: var(--orange1);
  }

  &&::-webkit-scrollbar-track {
    background: var(--background);
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
