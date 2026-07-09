import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <App />
        <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
      toastClassName="custom-toast"
      bodyClassName="custom-toast-body"
    />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
