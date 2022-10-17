import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Rooms = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Rooms