import React from 'react'
import Hader from '../components/Hader/Hader'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'

const Home = () => {
  return (
    <>
        <Hader />
        <Navbar />
        <Banner />
        <Categories />
    </>
  )
}

export default Home