import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background: rgba(0, 0, 0, 0.44);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxLogin = styled.div`
  width: 300px;
  height: 400px;
  background-color: var(--white);

  > svg {
    position: relative;
    left: 257px;
    top: -46px;
    font-size: 29px;
    cursor: pointer;
    transition: 0.4s;
  }

  > svg:hover {
    color: var(--gray1);
  }

  h3 {
    margin-top: 24px;
    margin-bottom: -5px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    width: 266px;
    margin-top: 10px;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: var(--black1);
  }

  input {
    border: 1px solid var(--dark3);
    background-color: var(--background);
    border-radius: 4px;
    width: 266px;
    height: 56px;
    margin-top: 16px;
    padding-left: 16px;
    color: var(--black1);
  }

  input::placeholder {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: var(--gray1);
  }

  input:focus {
    background-color: var(--dark1);
    color: var(--gray1);
  }

  button {
    margin-top: 24px;
  }
`;
