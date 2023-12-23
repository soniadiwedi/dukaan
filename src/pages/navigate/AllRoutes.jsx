import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Payout from '../payout/Payout'
import Refund from '../refund/Refund'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Payout/>}/>
        <Route path='/refund' element={<Refund/>}/>
    </Routes>
  )
}

export default AllRoutes