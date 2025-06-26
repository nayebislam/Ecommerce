import React from 'react'
// import Containar from "../../layout/Containar";
import Containar from "../layout/Containar"
import ProductsLeftPart from '../components/ProductsPage/ProductsLeftPart'
import ProductsRightPart from '../components/ProductsPage/ProductsRightPart'

const Products = () => {
  return (
    <section>
        <Containar>
            <div className='flex'>
                <ProductsLeftPart />
                <ProductsRightPart />
            </div>
        </Containar>
    </section>
  )
}

export default Products