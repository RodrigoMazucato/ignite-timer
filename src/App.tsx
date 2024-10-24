import { defaultTheme } from './styles/themes/default.ts'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { Router } from './Routes'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
export default App
