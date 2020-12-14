import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *,
    *::before,
    *::after{
        padding:0;
        margin:0;
        background:#f5f5f5;
        box-sizing:border-box;
        font-size:inherit;
    }
    html{
        font-size:62.5%;
    }

`;
