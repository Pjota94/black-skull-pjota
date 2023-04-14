import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    
  }
  button{
    cursor: pointer;
  }
  
  ul ol li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  :root{
    --black1:rgba(11, 11, 11, 1);
    --dark1:rgba(28, 28, 30, 1);
    --dark2:rgba(44, 44, 46, 1);
    --dark3:rgba(58, 58, 60, 1);
    --gray1:rgba(154, 154, 154, 1);
    --gray2:rgba(202, 202, 202, 1);
    --background:rgba(241, 241, 241, 1);
    --orange1:rgba(255, 150, 1, 1);
    --orange2:rgba(255, 196, 112, 1);
    --white:rgba(255, 255, 255, 1);
    --gradiente-dark:linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%);
  }
  
 `;
