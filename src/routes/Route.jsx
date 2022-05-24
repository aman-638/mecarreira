import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Login from '../components/signin/Login'
import { Otp } from '../components/signin/Otp'
import { Register } from '../components/signup/Register'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>
    </Routes>
  )
}

export default AllRoute