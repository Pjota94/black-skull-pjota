import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: var(--dark2);
    width: 643px;
  }

  h3 {
    position: relative;
    top: -185px;
    margin-bottom: 0;
  }
`;

export const BoxSkull = styled.div`
  img {
    filter: opacity(0.15);
    width: 160px;
    height: 160px;
  }
`;
