import styled from "styled-components";

export const Container = styled.li`
  figure {
    width: 277px;
    height: 340px;
    margin: 0;
    padding: 0;
    background: #fff;
    overflow: hidden;
  }
  figure img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }

  figure:hover img {
    filter: sepia(1);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;

export const Banner = styled.img`
  position: relative;
  top: -40px;
`;

export const SpanStyle = styled.span`
  font-family: "Barlow";
  font-style: italic;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--black1);
  width: 175px;
  display: block;
  position: relative;
  top: -72px;
  left: 14px;
`;
