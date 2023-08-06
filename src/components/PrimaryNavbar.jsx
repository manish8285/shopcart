import React from 'react'
import shopCartLogo from "../assets/shopcartLogo.png"

const PrimaryNavbar = () => {
  return (
    <nav className='w-full sm:flex sm:justify-left space-y-1 space-x-1 block-section py-2 items-center  justify-between'>
            <img src={shopCartLogo} className='inline-block' alt="logo" />
            <div className='inline-block sm:hidden absolute right-2 cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

            </div>
            <ul className='hidden sm:block inline-block sm:flex space-x-5'>
              <select className='bg-white hover:animate-ping cursor-pointer'>
                <option value="">Categories</option>
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
              </select>
              <li className='hover:animate-ping cursor-pointer'>Deals</li>
              <li className='hover:animate-ping cursor-pointer'>What's New</li>
              <li className='hover:animate-ping cursor-pointer'>Delivery</li>
            </ul>

            

  <form method="GET">
    <div class="relative text-gray-600 focus-within:text-gray-400">
      <span class="absolute inset-y-0 right-1 flex items-center">
        <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" name="q" className="py-2 text-sm text-white bg-gray-100 rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900 w-full" placeholder="Search product" autocomplete="off" />
    </div>
  </form>
  <ul className="flex space-x-3">
    <li className='space-x-2 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
      <span>Account</span>
    </li>
<li className='space-x-2 cursor-pointer'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<span>Cart</span>
</li>
  </ul>

    </nav>
  )
}

export default PrimaryNavbar