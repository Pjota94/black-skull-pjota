import styled from "styled-components";
import cover from "../../assets/Images/Capa.png";

export const Main = styled.main`
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
  /* height: 548px; */
  min-height: 100vh;
  margin-top: 104px;

  h1 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 56px;
    line-height: 66px;
    color: var(--white);
    width: 551px;
    margin-left: 155px;
    padding-top: 130px;
  }

  span {
    color: var(--orange1);
  }

  p {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--white);
    width: 349px;
    margin: 16px 0 32px 0;
    margin-left: 155px;
  }

  button {
    border: none;
    background: var(--orange1);
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: var(--black1);
    width: 120px;
    height: 48px;
    border-radius: 4px;
    margin-left: 155px;
  }

  button:hover {
    background: var(--orange2);
  }
`;
