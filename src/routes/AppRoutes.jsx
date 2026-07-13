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
import MyCharity from '../pages/charity/MyCharity'
import ProjectProfile from '../pages/charity/ProjectProfile'
import Projects from '../pages/projects/Projects'
import PaymentStatus from '../pages/PaymentStatus'

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  return (
    <Routes>

      <Route element={<ProtectedRoute />}>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/charities" element={<CharityList />} />
        <Route path="/mycharities" element={<MyCharity />} />
        <Route path="/projectDetails/:id" element={<ProjectProfile />} />
                <Route path="/paymentStatus/:order_id" element={<PaymentStatus />} />

      </Route>
      <Route path='/' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/AllCharityProjects" element={<Projects />} />
    </Routes>
  )
}

export default AppRoutes
