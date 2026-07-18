import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/variables.css'
import './styles/global.css'
import './styles/animations.css'
import './styles/responsive.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/section-wars">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
