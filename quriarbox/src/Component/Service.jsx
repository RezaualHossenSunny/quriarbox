import React from 'react'
 import icon from '../assets/iCON.jpg'
const Service = () => {
  return (
    <div className='bg-baner py-1'>
    <div className='max-w-container mx-auto '>
    {/* text */}
      <div className='text-center'>
      <h1 className='font-oxium text-4xl text-comon font-bold'>SERVICES</h1>
      <h2 className='font-ral text-4xl text-gray-500 font-extrabold'>Our services for you</h2>

      </div>
      {/* text */}

      <div className='flex  py-20'>
        <div className=' bg-white py-40 px-24'>
            <img className='mx-auto' src={icon}/>
            <h1 className='mt-7 mx-auto text-center font-ral text-2xl font-extrabold text-[#464558] w-[222px] h-[26px]'>Business Services</h1>
            <p className='mt-8 font-ral text-base font-normal text-[#7B7A8B] w-[310px]  mx-auto '>We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries.</p>
            
        </div>
        <div className=''></div>
        <div className=''></div>
      </div>
    </div>

    </div>
  )
}

export default Service