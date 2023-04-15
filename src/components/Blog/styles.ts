import styled from "styled-components";

export const Container = styled.section`
  height: 540px;
  background: var(--gradiente-dark);
  margin-top: 105px;
  margin-bottom: 64px;

  h2 {
    font-family: "Roboto Condensed";
    font-style: italic;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 646px;
  }

  h2 > span {
    color: var(--orange1);
  }
`;

export const BoxTop = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 40px;
  margin-bottom: 24px;
  width: 1200px;
  margin: 0 auto;
`;

export const BoxCards = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  svg {
    font-size: 20px;
    color: var(--black1);
  }

  .prev {
    position: relative;
    top: 208px;
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
    top: 208px;
    z-index: 5;
    left: 1129px;
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
