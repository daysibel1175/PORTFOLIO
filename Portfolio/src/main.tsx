import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme.ts'
import "../src/assets/styles/styles.css"
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    <CssBaseline/>
    </ThemeProvider>
   
  </React.StrictMode>,
)
