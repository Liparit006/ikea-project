import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleClick, selectBasket } from '../store/slices/basketSlice';
import { selectProduct } from '../store/slices/productSlice';
import BasketPage from './BasketPage';

export default function Basket() {
    const Products = useSelector(selectProduct);
    const productsFilter = Products.filter((el) => el.basketCount > 0);
    const dispatch = useDispatch();

    dispatch(handleClick({
        productsFilter
    }));

    const basketProducts = useSelector(selectBasket);

    return (
        <div className='p-4'>
            <div className='flex flex-wrap justify-center gap-4'>
                {basketProducts.map((el) => {
                    return (
                        <div key={el.id}>
                            <BasketPage id={el.id} name={el.name} img={el.img} description={el.description} price={el.price} basketCount={el.basketCount} />
                        </div>
                    );
                })}
            </div>
            <div className='w-full flex justify-center mt-8'>
            </div>
        </div>
    );
}
