import styled from "@emotion/styled";
import stars from './stars.jpg'

export const Wrapper = styled.div`
background: url(${stars}) no-repeat center center fixed;
background-repeat: no-repeat;
background-size: 100%;
background-width: auto;
background-height: 100vh;
margin-bottom: -10px;

-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
margin: auto;
text-align: center;
   button {
    margin-bottom: 10px;
    border-radius: 20px;
    color: primary;
    
}
`;



