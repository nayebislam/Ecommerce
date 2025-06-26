import React from 'react'
import Banner from '../components/Banner/Banner'
import Categories from '../components/Categories/Categories'
import BestSellingProducts from '../components/BestSellingProducts/BestSellingProducts'
import Offer from '../components/Offer/Offer'
import OurProducts from '../components/OurProducts/OurProducts'
import NewArrival from '../components/NewArrival/NewArrival'
import Delivery from '../components/Delivery/Delivery'

const Home = () => {
  return (
    <>
        <Banner />
        <Categories />
        <BestSellingProducts />
        <Offer />
        <OurProducts />
        <NewArrival />
        <Delivery />
    </>
  )
}

export default Home