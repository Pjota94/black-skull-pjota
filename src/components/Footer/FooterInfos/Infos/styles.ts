import styled from "styled-components";

export const Container = styled.div`
  margin-top: 40px;
  h4 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: var(--white);
    margin-bottom: 20px;
  }
`;

export const BoxInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray1);
    width: 156px;
  }
`;
