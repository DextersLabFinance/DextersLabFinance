import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
