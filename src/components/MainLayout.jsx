import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className='w-[100vw] flex flex-col items-center'>
            <Header />
            <Outlet />
        </div>
    )
}
