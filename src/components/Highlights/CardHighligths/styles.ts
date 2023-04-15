import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(213.8deg, #9a9a9a -17.86%, #0b0b0b 73%);
  width: 475px;
  height: 280px;
  display: flex;
`;

export const BoxText = styled.div`
  margin-left: 40px;
  margin-top: 40px;

  h2 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    color: var(--white);
    width: 237px;
    margin-bottom: 24px;
  }

  h2 > span {
    color: var(--orange1);
  }
`;

export const BoxVector = styled.div`
  img {
    margin-top: 85px;
    transition: 0.5s;
  }

  img:hover {
    transform: rotate(180deg) translateY(30px);
  }
`;
