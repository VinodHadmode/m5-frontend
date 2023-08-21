import React from 'react'
import {Routes,Route} from "react-router-dom"
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import DocOnboard from '../pages/DocOnboard'
import Doctors from '../pages/Doctors'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/onboard' element={<DocOnboard/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='*' element={<h2>Page not found!!</h2>}/>
    </Routes>
  )
}

export default AllRoutes
