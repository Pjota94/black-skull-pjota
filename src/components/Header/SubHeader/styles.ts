import styled from "styled-components";

export const Container = styled.div`
  height: 32px;
  background-color: var(--dark1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  h5 {
    color: var(--orange1);
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    margin-left: 56px;
    margin-right: 56px;
  }

  .truck-text {
    display: flex;
    align-items: center;

    svg {
      color: var(--orange1);
      margin-right: 10px;
      font-size: 20px;
    }

    p {
      font-family: "Barlow";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      text-transform: uppercase;
      color: var(--gray2);
    }
  }
`;
