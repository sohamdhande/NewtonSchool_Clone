import './index.css'
import '@newtonschool/grauity/dist/css/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Dashboard from './pages/Dashboard'

import ArenaPage from './pages/ArenaPage'

const path = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/dashboard' ? <Dashboard /> : path === '/arena' ? <ArenaPage /> : <App />}
  </StrictMode>,
)
