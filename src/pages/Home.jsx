import React from 'react'
import Hader from '../components/Hader/Hader'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Offer from '../components/Offer/Offer'
import OurProducts from '../components/OurProducts/OurProducts'
import NewArrival from '../components/NewArrival/NewArrival'
import Delivery from '../components/Delivery/Delivery'

const Home = () => {
  return (
    <>
        <Hader />
        <Navbar />
        <Banner />
        <Categories />
        <Products />
        <Offer />
        <OurProducts />
        <NewArrival />
        <Delivery />
    </>
  )
}

export default Home