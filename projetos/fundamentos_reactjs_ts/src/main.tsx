import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.js'

// ! = Eu falo pro TypeScript que pode existir
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
