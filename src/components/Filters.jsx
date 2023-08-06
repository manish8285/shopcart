import React from 'react'

const Filters = () => {
  return (
    <nav className='block-section my-4  sm:py-5 flex justify-between'>
        
        <div className='space-x-4'>
        <select className='filter-item bg-gray'>
            <option value="" selected >Headpnone Type</option>
            <option value=""  >Type 1</option>
            <option value=""  >Type 2</option>
            <option value=""  >Type 3</option>
            
        </select>
        <select className='filter-item bg-gray'>
            <option value="">Price</option>
            <option value="">200</option>
            <option value="">400</option>
            <option value="">600</option>
        </select>
        <select className='filter-item bg-gray'>
            <option value="">Review</option>
            <option value="">200</option>
            <option value="">400</option>
            <option value="">600</option>
        </select>
        <select className='filter-item bg-gray'>
            <option value="">Color</option>
            <option value="">200</option>
            <option value="">400</option>
            <option value="">600</option>
        </select>
        <select className='filter-item bg-gray'>
            <option value="">Material</option>
            <option value="">200</option>
            <option value="">400</option>
            <option value="">600</option>
        </select>
        <select className='filter-item bg-gray'>
            <option value="">Offer</option>
            <option value="">200</option>
            <option value="">400</option>
            <option value="">600</option>
        </select>

        <div className='filter-item inline-block bg-gray'>All Filter</div>
        </div>

        <select name="" id="" className='rounded-full pl-1 bg-white border-2 border-gray'>
            <option value="">Sort by</option>
            <option value="">Price</option>
            <option value=""> Popularity</option>
        </select>

    
    </nav>
  )
}

export default Filters