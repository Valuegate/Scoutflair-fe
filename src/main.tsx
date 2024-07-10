import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import "toastify-js/src/toastify.css"
import { BrowserRouter } from "react-router-dom";
import AuthProvider from './providers/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)