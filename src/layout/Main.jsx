import React from 'react'
import Hader from '../components/Hader/Hader'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <>
        <Hader />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Main