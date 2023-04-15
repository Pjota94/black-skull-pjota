import styled from "styled-components";
import sujo from "../../assets/Images/sujo.png";

export const Container = styled.section`
  background: var(--black1);
  margin: 120px 0 88px 0;
  height: 461px;
  background-image: url(${sujo});
  position: relative;
  z-index: 1;

  h2 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    color: var(--white);
    width: 900px;
    margin: 0px auto;
    padding-top: 40px;
  }

  h2 > span {
    color: var(--orange1);
  }
`;

export const Skull = styled.img`
  opacity: 0.17;
  position: absolute;
  top: 0px;
  z-index: 0;
  right: 0;
`;

export const BoxCards = styled.section`
  width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Ul = styled.ul`
  svg {
    font-size: 20px;
    color: var(--black1);
  }

  .prev {
    position: relative;
    top: 164px;
    z-index: 5;
    border: none;
    background: var(--gray2);
    border-radius: 4px;
    width: 32px;
    height: 32px;
    left: -15px;
    transition: 0.4s;
  }

  .prev:hover {
    background-color: var(--orange2);
  }

  .next {
    position: relative;
    top: 164px;
    z-index: 5;
    left: 832px;
    border: none;
    background: var(--gray2);
    border-radius: 4px;
    width: 32px;
    height: 32px;
    transition: 0.4s;
  }

  .next:hover {
    background-color: var(--orange2);
  }

  .slick-dots {
    bottom: -71px;
  }

  .slick-dots li {
    margin-right: 29px;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button:before {
    display: block;
    background: var(--orange1);
    width: 40px;
    height: 6px;
  }
`;

export const Img = styled.img`
  max-width: 277px;
  height: 294px;
  margin-right: 10px;
  z-index: 5;
`;

export const ButtonMore = styled.button`
  width: 139px;
  height: 48px;
  border-radius: 4px;
  background: var(--orange1);
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--black1);
  border: none;
  position: relative;
  top: 19px;
  left: 45%;
  z-index: 5;
  transition: 0.4s;

  &&:hover {
    background: var(--orange2);
  }
`;
