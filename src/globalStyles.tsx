import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
        color: ${theme.colors.lightText};
    }

    * {
        box-sizing: border-box;
    }
`