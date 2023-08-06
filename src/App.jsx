import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavbar from './components/TopNavbar'
import PrimaryNavbar from './components/PrimaryNavbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full'>
        <TopNavbar />

        <PrimaryNavbar />

        <Hero />

        <Filters />

        <Products />

    </div>
  )
}

export default App
