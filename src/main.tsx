import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/sass/index.scss'
import App from './js/components/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
