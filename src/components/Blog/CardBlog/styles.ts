import styled from "styled-components";

export const Container = styled.li`
  width: 376px;
  height: 380px;
  background-color: var(--dark1);
  border: 1px solid var(--dark3);
  display: flex;
  flex-direction: column;

  img {
    width: 373px;
    height: 200px;
  }
`;

export const BoxInfos = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--gray2);
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: var(--white);
    margin: 16px 0 24px 0;
  }
`;
