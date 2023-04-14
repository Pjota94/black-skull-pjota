import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 127px;
  height: 40px;
  background: var(--orange1);
  border: none;
  border-radius: 4px;
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &&:hover {
    background: var(--orange2);
  }
`;
