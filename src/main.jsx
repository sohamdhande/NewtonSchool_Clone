import './index.css'
import '@newtonschool/grauity/dist/css/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Dashboard from './pages/Dashboard'

import ArenaPage from './pages/ArenaPage'
import LeaderboardPage from './pages/LeaderboardPage'
import CalendarPage from './pages/CalendarPage'
import TryoutsPage from './pages/TryoutsPage'
import TimelinePage from './pages/TimelinePage'

const path = window.location.pathname;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {path === '/dashboard' ? <Dashboard /> : path === '/arena' ? <ArenaPage /> : path === '/leaderboard' ? <LeaderboardPage /> : path === '/calendar' ? <CalendarPage /> : path === '/tryouts' ? <TryoutsPage /> : path === '/timeline' ? <TimelinePage /> : <App />}
  </StrictMode>,
)
