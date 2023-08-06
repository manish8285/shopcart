import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <div className='block-section grid sm:grid-cols-4 gap-[60px]' >
        <Product />

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
    </div>
  )
}

export default Products