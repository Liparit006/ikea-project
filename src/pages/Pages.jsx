import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Basket from './Basket'
import MainLayout from '../components/MainLayout'
import App from '../App'

export default function Pages() {
    const router = createBrowserRouter([
        {
            path:'/',
            element:<MainLayout />,
            children:[
                {
                    path:"",
                    element:<App />
                },
                {
                    path:"basket",
                    element:<Basket />
                }
            ]
        }
    ])
    return (
        <div className='w-[80%] h-full'>
            <RouterProvider router={router} />
        </div>
    )
}
