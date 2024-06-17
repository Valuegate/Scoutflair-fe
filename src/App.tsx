import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/about'} element={<AboutPage />} />
    </Routes>
  )
}

export default App
