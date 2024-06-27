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
// import TestSC from './pages/test'
import SignInSelectPage from './pages/Auth/SignInSelect'
// import ScoutIntro from './pages/Auth/Scout/ScoutIntro'
// import PlayerIntro from './pages/Auth/Player/PlayerIntro'
import CoachIntro from './pages/Auth/Coach/CoachIntro'
import Intro from './pages/Auth/Intro'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<LandingPage />} />
      <Route path={'/test'} element={<CoachIntro />} />
      <Route path={'/about'} element={<AboutPage />} />
      <Route path={'/contact'} element={<ContactPage />} />
      <Route path={'/blogs'} element={<BlogsPage />} />
      <Route path={'/services'} element={<ServicePage />} />
      <Route path={'/sign-up/success'} element={<SignUpSuccessPage />} />
      <Route path={'/login'} element={<SignInSelectPage />} />
      <Route path={'/sign-up'} element={<SignUpSelectPage />} />
      <Route path={'/intro'} element={<Intro />} />
      <Route path={'/password-reset'} element={<PasswordResetPage />} />
      <Route path={'/password-reset-form'} element={<PasswordResetForm />} />
      <Route path={'/password-reset/success'} element={<PasswordResetSuccess />} />
    </Routes>
  )
}

export default App
