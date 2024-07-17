import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import BlogsPage from './pages/BlogsPage'
import ServicePage from './pages/ServicePage'
import SignUpSuccessPage from './pages/Auth/SignUpSuccess'
import PasswordResetPage from './pages/Auth/PassworResetPage'
import PasswordResetForm from './pages/Auth/PasswordResetForm'
import PasswordResetSuccess from './pages/Auth/PasswordResetSuccess'
import SignUpSelectPage from './pages/Auth/SignUpSelect'
import CoachIntro from './pages/Auth/Coach/CoachIntro'
import Intro from './pages/Auth/Intro'
import LoginPage from './pages/Auth/LoginPage'
import NotFound from './pages/NotFound'
import Dashboard from './pages/Dashboard'
import PasswordResetTokenPage from './pages/Auth/PasswordResetTokenPage'
// import Analytics from './pages/Dashboard/Analytics'

const App = () => {
  return (
    <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/test'} element={<CoachIntro />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route path={'/blogs'} element={<BlogsPage />} />
        <Route path={'/services'} element={<ServicePage />} />
        <Route path={'/Dashboard'} element={<Dashboard />} />
        {/* <Route path={'/Dashboard'} element={<Analytics />} /> */}
        <Route path={'/signup/success'} element={<SignUpSuccessPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/signup'} element={<SignUpSelectPage />} />
        <Route path={'/sign-up/confirm'} element={<PasswordResetTokenPage />} />
        <Route path={'/intro'} element={<Intro />} />
        <Route path={'/password-reset'} element={<PasswordResetPage />} />
        <Route path={'/password-reset/confirm'} element={<PasswordResetTokenPage />} />
        <Route path={'/password-reset/form'} element={<PasswordResetForm />} />
        <Route path={'/password-reset/success'} element={<PasswordResetSuccess />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
