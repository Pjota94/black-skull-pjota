import styled from "styled-components";

export const Container = styled.div`
  h4 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 24px;
  }
`;

export const BoxCredits = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 202px;
  gap: 8px;
`;

export const CreditCard = styled.div`
  border-radius: 4px;
  width: 34px;
  height: 24px;
  border: 1px solid #d9d9d9;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
`;
