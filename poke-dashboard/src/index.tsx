import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { ColorsTheme, GlobalStyle } from './styles/global'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <ThemeProvider theme={ ColorsTheme }>
            <App />
        </ThemeProvider>

    </React.StrictMode>
)
