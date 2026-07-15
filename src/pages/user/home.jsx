import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import { isTokenExpired } from '../../utils/helper'
import { refreshToken } from '../../services/auth.service'

const Homey = () => {
   
    return (
        <div>
            <Navbar  />
        </div>
    )
}

export default Homey
