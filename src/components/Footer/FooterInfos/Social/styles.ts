import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 245px;
  margin-top: 40px;

  img {
    width: 213px;
    margin-bottom: 47px;
  }

  span {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--white);
    text-align: center;
  }
`;

export const BoxSocial = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;

  > img {
    width: 24px;
    height: 24px;
  }
`;
