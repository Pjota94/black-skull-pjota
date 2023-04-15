import styled from "styled-components";

export const Container = styled.div`
  width: 216px;
  height: 40px;
  border: 1px solid var(--dark3);
  border-radius: 4px;
  background-color: var(--dark1);
  display: flex;
  align-items: center;

  svg {
    font-size: 24px;
    color: var(--gray1);
  }

  input {
    margin-left: 16px;
    margin-right: 10px;
    background-color: transparent;
    border: none;
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
`;
