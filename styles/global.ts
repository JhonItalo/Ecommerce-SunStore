import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'serif';
    background-color: white;
}
ul{
    list-style: none;
  
}
a{
    text-decoration: none;
    &:link, &:visited, &:active {
        color: inherit;
    }
}
button{
    cursor: pointer;
}

@media (max-width: 1920px ) and (min-width: 1441px){
    html{
        font-size: 21px;
    } 
}
@media (max-width: 1366px) and  (min-width: 1281px){
    html{
        font-size: 16px;
    } 
}
@media (max-width: 1280px) and (min-width: 1000px){
    html{
        font-size: 15px;
    } 
}
@media (max-width: 748px) {
    html{
        font-size: 12px;
    }
  }
`
export default GlobalStyles;

