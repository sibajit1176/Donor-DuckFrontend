import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/auth/login'
import Register from '../pages/auth/Register'
import Home from '../pages/user/home'
import Dashboard from '../components/layout/dashboard'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default AppRoutes
