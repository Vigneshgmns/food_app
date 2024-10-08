import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    const [food, setFood] = useState(data)

    // Filter Type burgers/pizza/etc
    const filterType = (category) => {
        setFood(
            data.filter((item) => item.category === category)
        )
    }

      // Filter Price 
      const filterPrice = (price) => {
        setFood(
            data.filter((item) => item.price === price)
        )
    }


    return (
        <div className='max-w-[1640px] m-auto px-4 py-12 '>
            <h1 className='text-orange-500 font-bold text-center text-4xl'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col lg:flex-row justify-between'>

                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setFood(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=> filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={()=> filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                        <button onClick={()=> filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                        <button onClick={()=> filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=> filterPrice('$150')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$150</button>
                        <button onClick={()=> filterPrice('$275')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$275</button>
                        <button onClick={()=> filterPrice('$340')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$340</button>
                        <button onClick={()=> filterPrice('$453')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$453</button>
                    </div>
                </div>
            </div>
            {/* Display Foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {food.map((item, index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food
