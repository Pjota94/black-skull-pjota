import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 46px;
  margin-bottom: 56px;

  h3 {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: var(--dark1);
    text-transform: uppercase;
    margin-top: 16px;
  }
`;

export const Circle = styled.div`
  width: 178px;
  height: 178px;
  background-color: var(--background);
  border-radius: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
