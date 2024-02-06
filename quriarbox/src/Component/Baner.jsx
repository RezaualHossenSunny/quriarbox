import React from 'react'
import baner from '../assets/banner image.png'
const Baner = () => {
  return (
    <div className='bg-[#fff7e7dd]'>
        <div className='max-w-container mx-auto py-64 flex'>
        {/* text */}    
        <div className='w-3/6'>
        <div>
            <h1 className='font-ral text-[49px] font-normal text-[#261134] leading-[58px]'>A trusted provider of <span className='font-extrabold leading-[58px]'> courier services.</span></h1>

            <p className='text-[#4D4D4D] font-ral text-xl leading-6 font-normal w-[330px] mt-4'>We deliver your products safely to your home in a reasonable time.</p>
        </div>

        <div className='mt-[56px]'>
            <button className='py-3 px-5 bg-comon text-xl text-white font-bold rounded-md  '>Get started</button>
        </div>

        </div>
        {/* text */}
       
         <div className='w-3/6'>
            <img src={baner}/>
         </div>
        </div>
    </div>
  )
}

export default Baner