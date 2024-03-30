import React from 'react'
import img1 from '../assets/c1.png'
import img2 from '../assets/c2.png'
import img3 from '../assets/c3.png'
import img4 from '../assets/c4.png'
import img5 from '../assets/c5.png'
const Client = () => {
    return (
        <div className='bg-baner'>
            <div className='max-w-container mx-auto py-28'>
                <div className='flex justify-between gap-[200px]'>
                    <div>
                        <img className='mx-auto' src={img1} />
                        <h2 className='font-extrabold text-ral text-4xl mt-4 text-comon text-center'>26+</h2>
                        <p className='mt-1 text-ral font-bold text[#464558] text-xl text-center'>Awards  won</p>

                    </div>

                    <div>
                        <img className='mx-auto' src={img2} />
                        <h2 className='font-extrabold text-ral text-4xl mt-4 text-comon text-center'>65+</h2>
                        <p className='mt-1 text-ral font-bold text[#464558] text-xl text-center'>States covered</p>

                    </div>

                    <div>
                        <img className='mx-auto' src={img3} />
                        <h2 className='font-extrabold text-ral text-4xl mt-4 text-comon text-center'>689K+</h2>
                        <p className='mt-1 text-ral font-bold text[#464558] text-xl text-center'>Happy clients</p>

                    </div>

                    <div>
                        <img className='mx-auto' src={img4} />
                        <h2 className='font-extrabold text-ral text-4xl mt-4 text-comon text-center'>130M+</h2>
                        <p className='mt-1 text-ral font-bold text[#464558] text-xl text-center'>Goods delivered</p>

                    </div>

                    <div>
                        <img className='mx-auto' src={img5} />
                        <h2 className='font-extrabold text-ral text-4xl mt-4 text-comon text-center'>130M+</h2>
                        <p className='mt-1 text-ral font-bold text[#464558] text-xl text-center'>Business hours</p>

                    </div>




                </div>
            </div>
        </div>
    )
}

export default Client