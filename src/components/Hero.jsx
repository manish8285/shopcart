import React from 'react'
import herogirl from "../assets/herogirl.png"
const Hero = () => {
  return (
    <div className='sm:block-section '>
        <div className='bg-hero fg-green px-5 flex sm:px-[40px] pt-2 justify-between items-center sm:pl-[80px] sm:pr-[140px]'>
        <div className='fg-green '>
            <h1 className='text-[20px] sm:text-[35px] font-bold'>Grap Upto 50% Off On</h1>
            <h1 className='text-[20px] sm:text-[35px] font-bold'>Selected Headphone</h1>
            <button className='rounded-full bg-green text-white px-4 py-1'>Buy Now</button>
        </div>

        <img className='sm:h-[220px] hidden md:block ' src={herogirl} alt="girl" />

        </div>
    
    </div>
  )
}

export default Hero