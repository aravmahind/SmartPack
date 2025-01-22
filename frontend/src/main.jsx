import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter>
      <App />
    </AppRouter>
  </StrictMode>,
)
