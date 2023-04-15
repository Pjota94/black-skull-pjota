import styled from "styled-components";

export const FormStyle = styled.form`
  min-width: 353px;
  height: 500px;
  background-color: var(--black1);
  border-left: 1px solid var(--dark3);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: var(--white);
    margin-top: 64px;
    width: 145px;
    text-align: center;
  }

  h2 > span {
    color: var(--orange1);
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: var(--gray1);
    width: 260px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  input {
    border: 1px solid var(--dark3);
    background-color: var(--dark1);
    border-radius: 4px;
    width: 266px;
    height: 56px;
    margin-top: 16px;
    padding-left: 16px;
    color: var(--gray1);
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
    background-color: var(--background);
    color: var(--black1);
  }

  button {
    margin-top: 24px;
  }
`;
