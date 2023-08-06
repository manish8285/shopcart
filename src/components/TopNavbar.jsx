import React from 'react'

const TopNavbar = () => {
  return (
    <nav className='bg-green block-section py-1 flex justify-between items-center top-navbar'>
          <p className='text-white '>+00123456789</p>
          <p className='sm:text-white hidden md:block'>Get 50% off on selected items | Shop Now</p>
          
          <div className='flex'>
          <select type='select' className='bg-green text-white'>
            <option value="" > English</option>
            <option value=""> Hindi</option>
          </select>
          <select type='select' className='bg-green text-white'>
            <option value="" > Location</option>
            <option>India</option>
          </select>
          </div>
        </nav>
  )
}

export default TopNavbar