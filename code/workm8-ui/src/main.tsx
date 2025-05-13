import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Research from './pages/Research'
import Find from './pages/Find'
import Write from './pages/Write'
import Organize from './pages/Organize'
import Create from './pages/Create'
import Schedule from './pages/Schedule'
import More from './pages/More'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/research" element={<Research />} />
        <Route path="/find" element={<Find />} />
        <Route path="/write" element={<Write />} />
        <Route path="/organize" element={<Organize />} />
        <Route path="/create" element={<Create />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
