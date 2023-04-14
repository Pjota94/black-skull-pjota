import styled from "styled-components";

export const Container = styled.li`
  width: 277px;
  height: 341px;
  border: 1px solid var(--background);
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: -70px;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const Name = styled.span`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: var(--black1);
  width: 182px;
  margin: 24px 0 16px 24px;
`;

export const Price = styled.span`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  color: var(--orange1);
  margin-left: 24px;
  margin-bottom: 4px;
`;

export const Promo = styled.span`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--dark3);
  margin-left: 24px;
`;

export const BoxButtons = styled.div`
  position: relative;
  width: 50px;
  top: 83px;
  z-index: 5;
  right: -234px;

  .div-flex {
    display: flex;
    flex-direction: column;
    width: 50px;
  }

  .div-flex > svg {
    font-size: 24px;
    font-weight: bold;
    color: var(--gray1);
    cursor: pointer;
    margin-bottom: 10px;
  }

  svg:hover {
    color: var(--black1);
  }
`;
