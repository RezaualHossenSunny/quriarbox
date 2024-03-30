import React from 'react'
import icon from '../assets/Icon.png'
const Cover = () => {
    return (
        <div className='bg-baner'>
            <div className='py-40 max-w-container mx-auto'>
                <div className='bg-covers bg-no-repeat bg-cover bg-center'>
                    <div className='py-40'>
                        <div>
                            <img className='mx-auto' src={icon} />
                            <h1 className='text-center text-3xl mt-4 font-ral font-bold text-comon '>FASTEST DELIVERY</h1>
                            <p className='mt-4 text-center mx-auto text-2xl font-ral w-[573px] font-normal text-[#fff]'> You can get your valuable item in the fastest period of
                                time with safety. Because your emergency
                                is our first priority.</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cover