import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogsPage from './pages/BlogsPage'
import ServicePage from './pages/ServicePage'
import SignUpSuccessPage from './pages/Auth/SignUpSuccess'
import LoginPage from './pages/Auth/LoginPage'
import PasswordResetPage from './pages/Auth/PassworResetPage'
import PasswordResetForm from './pages/Auth/PasswordResetForm'
import PasswordResetSuccess from './pages/Auth/PasswordResetSuccess'
import SignUpPage from './pages/Auth/SignUpPage'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/about'} element={<AboutPage />} />
      <Route path={'/contact'} element={<ContactPage />} />
      <Route path={'/blogs'} element={<BlogsPage />} />
      <Route path={'/services'} element={<ServicePage />} />
      <Route path={'/sign-up/success'} element={<SignUpSuccessPage />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/sign-up'} element={<SignUpPage />} />
      <Route path={'/password-reset'} element={<PasswordResetPage />} />
      <Route path={'/password-reset-form'} element={<PasswordResetForm />} />
      <Route path={'/password-reset/success'} element={<PasswordResetSuccess />} />
    </Routes>
  )
}

export default App
