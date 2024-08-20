import React from 'react'

const HandlineCards = () => {
    return (
        <div className='max-w-[1640px] max-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.pexels.com/photos/7497227/pexels-photo-7497227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='/'
                />

            </div>

            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    alt='/'
                />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We Deliver Desserts Too</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
                </div>
                <img
                    className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.pexels.com/photos/4669267/pexels-photo-4669267.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    alt='/'
                />
            </div>

        </div>
    )
}

export default HandlineCards
