import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { shortenProductsCount, enlargeProductsCount } from '../store/slices/productSlice';

export default function Product(data) {
    const dispatch = useDispatch();
    const [initialCount] = useState(data.count + data.basketCount);

    function shortenCount() {
        if (initialCount > data.count) {
            dispatch(shortenProductsCount({
                id: data.id
            }));
        }
    }

    function enlargeCount() {
        dispatch(enlargeProductsCount({
            id: data.id
        }));
    }

    return (
        <div className='p-4 w-[350px] flex flex-col items-center shadow-2xl shadow-white bg-blue-200'>
            <div className='mt-3'>
                <img src={data.img} className='object-cover w-[200px] h-[200px]' alt={data.description} />
            </div>
            <div className='mt-3'>
                <p className='text-blue-500 text-lg font-semibold'>{data.description}</p>
            </div>
            <div className='mt-2 bg-blue-200 p-2 rounded-lg'>
                <p className='text-green-600 text-lg'>
                    <span className='text-blue-500'>Price:</span> ${data.price}
                </p>
            </div>
            <div className='mt-3 p-2 w-full flex justify-between    '>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none' onClick={shortenCount}>-</button>
                <span className='text-xl font-semibold mx-3'>{data.count}</span>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md focus:outline-none' onClick={enlargeCount}>+</button>

            </div>
        </div>
    );
}
