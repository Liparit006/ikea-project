import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectProduct } from '../store/slices/productSlice';

export default function Header() {
    const Product = useSelector(selectProduct);
    const product = Product.filter(el => el.basketCount > 0).length;

    return (
        <div className='w-[80%] mb-5 bg-blue-200 flex justify-between items-center rounded-md p-4'>
            <div>
                <Link to={''}>
                    <img src='logo.png' className='h-[60px] rounded-md' alt='Logo' />
                </Link>
            </div>
            <div className='flex flex-col-reverse items-end relative'>
                <Link to='basket'>
                    <img src='basket-icon.png' className='h-[70px]' alt='Basket' />
                </Link>
                {product > 0 && (
                    <div className='bg-red-500 w-[18px] h-[18px] rounded-[50%] text-white flex justify-center items-center absolute top-2 right-1'>
                        <p>{product}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
