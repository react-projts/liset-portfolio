import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        color: white;
    }

    body {
        background: #10101a;
        font-family: 'Inter', sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        background: rgba(42, 43, 56, 0.5);
        color: white;
        border: 3px solid #2a2b37;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: white;
            color: #10101a;
        }
    }

    h1{
        font-weight: bold;
    }

    p {
        padding: 2rem 0rem;
    }
`;

export default GlobalStyle;
