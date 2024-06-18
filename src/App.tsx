import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogsPage from './pages/BlogsPage'
import ServicePage from './pages/ServicePage'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/about'} element={<AboutPage />} />
      <Route path={'/contact'} element={<ContactPage />} />
      <Route path={'/blogs'} element={<BlogsPage />} />
      <Route path={'/services'} element={<ServicePage />} />
    </Routes>
  )
}

export default App
