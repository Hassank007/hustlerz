import React from 'react'
import Navbar from '../components/Navbar'

const Page = () => {
  return (
    <div>
      <Navbar ncolor={'bg-white'} />
      <div className='bg-[#231f20] w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-row items-center justify-center'>
        <img src='logo3.png' className='w-72 py-6'/>
        </div>
        <h1 className='font-Anton text-white text-6xl sm:text-8xl text-center'>
          Coming Soon!
        </h1>
      </div>
    </div>
  )
}

export default Page
