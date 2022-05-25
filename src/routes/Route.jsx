import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Menu from '../components/menu/Menu'
import Login from '../components/signin/Login'
import { Otp } from '../components/signin/Otp'
import Confirm from '../components/signup/Confirm'
import { Register } from '../components/signup/Register'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/confirm' element={<Confirm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/otp' element={<Otp/>}/>

        <Route path='/menu' element={<Menu/>}/>
    </Routes>
  )
}

export default AllRoute