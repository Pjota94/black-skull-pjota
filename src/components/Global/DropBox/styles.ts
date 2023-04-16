import styled from "styled-components";

export const Container = styled.main`
  position: absolute;
  z-index: 5;
  width: 180px;
  background-color: var(--black1);
  display: none;

  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 40px 20px 40px;
  }

  li {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: var(--gray1);
    cursor: pointer;
  }

  li:hover {
    color: var(--white);
  }
`;
