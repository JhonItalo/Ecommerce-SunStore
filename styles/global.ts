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

@media (max-width: 1920px ){
    html{
        font-size: 21px;
    } 
}
@media (max-width: 1366px){
    html{
        font-size: 16px;
    } 
}
@media (max-width: 1280px){
    html{
        font-size: 15px;
    } 
}
`
export default GlobalStyles;

