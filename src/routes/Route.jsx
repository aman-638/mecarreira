import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/home/Home'
import { Register } from '../components/signup/Register'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}

export default AllRoute