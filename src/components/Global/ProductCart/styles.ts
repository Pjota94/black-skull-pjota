import styled from "styled-components";

export const Container = styled.li`
  width: 350px;
  height: 146px;
`;

export const DivTop = styled.div`
  display: flex;

  > img {
    width: 100px;
    height: 100px;
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--black1);
    width: 170px;
    margin-right: 33px;
  }

  svg {
    color: var(--dark3);
    cursor: pointer;
    font-size: 20px;
  }
`;

export const DivBottom = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  margin-top: -43px;

  > span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 16px;
    color: var(--orange1);
    margin-right: 50px;
  }
`;

export const DivQuantity = styled.div`
  width: 89px;
  height: 34px;
  background-color: var(--background);
  border: 1px solid var(--gray2);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  > span {
    color: var(--black1);
    margin-right: 0px;
  }
`;
