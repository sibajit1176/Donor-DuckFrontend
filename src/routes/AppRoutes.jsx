import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/Register'
import Home from '../pages/user/home'
import Dashboard from '../components/layout/dashboard'
import Profile from '../pages/user/Profile'
import CharityList from '../pages/charity/CharityList'
import { useAuth } from "../hooks/useAuth";
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  return (
    <Routes>

      <Route element={<ProtectedRoute />}>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/charities" element={<CharityList />} />
      </Route>
      <Route path='/' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
