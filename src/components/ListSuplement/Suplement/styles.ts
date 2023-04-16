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
  transition: 0.3s ease-in-out;
  border: 5px solid transparent;

  &&:hover {
    background-color: var(--orange1);
    border: 5px solid var(--orange2);

    img {
      -webkit-transform: scale(1.4);
      transform: scale(1.4);
    }
  }

  img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
  }
`;
