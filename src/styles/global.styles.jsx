import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    box-sizing: border-box;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    
    body {
        background-color: #E8EBF6;
        color: #606377;
        height: auto;
        width: auto;
    }

    h1, h2, h3, h4, h5 {
        color: #3B5CB8;
        font-weight: 900;
    }

    ul {
        padding-inline-start: 0px;
    }

    li {
        list-style: none;
        margin-bottom: 10px;
    }
    
`
