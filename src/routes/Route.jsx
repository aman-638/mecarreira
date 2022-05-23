import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../components/home/Home'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default AllRoute