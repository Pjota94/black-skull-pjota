import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black1);
  border-top: 1px solid var(--dark3);
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: var(--white);
    margin-left: 56px;
  }
`;

export const BoxBrands = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 56px;
`;
