import styled from "styled-components";

export const Container = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  height: 350px;

  svg {
    font-size: 20px;
    color: var(--black1);
  }

  .prev {
    position: relative;
    top: 148px;
    z-index: 5;
    border: none;
    background: var(--gray2);
    border-radius: 4px;
    width: 32px;
    height: 32px;
    left: -4px;
    transition: 0.4s;
  }

  .prev:hover {
    background-color: var(--orange2);
  }

  .next {
    position: relative;
    top: 148px;
    z-index: 5;
    left: 1140px;
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

  /* .slick-dots li {
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
  } */
`;
