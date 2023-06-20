import styled from "@emotion/styled";
import stars from './stars.jpg'

export const Wrapper = styled.div`
background: url(${stars}) no-repeat center center fixed;
background-size: 100%;
width: 100vw;
height: 200vh;
background-width: auto;
background-height: 100vh;
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
margin: auto;
margin-top: -10px;
margin-left: -8px;


text-align: center;
   button {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
    color: primary;
    
}
`;




