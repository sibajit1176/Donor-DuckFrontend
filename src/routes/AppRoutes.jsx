import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/Register'
// import Home from '../pages/user/home'
import Dashboard from '../components/layout/dashboard'
import Profile from '../pages/user/Profile'
import CharityList from '../pages/charity/CharityList'
import { useAuth } from "../hooks/useAuth";
import ProtectedRoute from './ProtectedRoute'
import MyCharity from '../pages/charity/MyCharity'
import ProjectProfile from '../pages/charity/ProjectProfile'
import Projects from '../pages/projects/Projects'
import PaymentStatus from '../pages/PaymentStatus'
import AdminRoute from './AdminRoute'
import AdminDashboard from '../pages/admin/AdminDashboard'
import CharityManagement from '../pages/admin/CharityManagement'
import UserManagement from '../pages/admin/UserManagement'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import ForgotPassword from '../pages/auth/ForgotPassword'
import VerifyOtp from '../pages/auth/VerifyOtp'
import ResetPassword from '../pages/auth/ResetPassword'
import DonationHistory from '../pages/admin/DonationHistory'
import CharityDetails from '../pages/charity/CharityDetails'

const AppRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  return (
    <Routes>

      <Route element={<ProtectedRoute />}>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/mycharities" element={<MyCharity />} />
        <Route path="/projectDetails/:id" element={<ProjectProfile />} />
        <Route path="/paymentStatus/:order_id" element={<PaymentStatus />} />

      </Route>
      <Route element={<AdminRoute />}>
        <Route path='/adminDashBoard' element={<AdminDashboard />} />
        <Route path='/CharityManagement' element={<CharityManagement />} />
        <Route path='/UserManagement' element={<UserManagement />} />
      <Route path="/donationManagement" element={<DonationHistory />} />
      </Route>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/AllCharityProjects" element={<Projects />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/charities" element={<CharityList />} />
            <Route path="/charities/details/:id" element={<CharityDetails />} />
    </Routes>
  )
}

export default AppRoutes
