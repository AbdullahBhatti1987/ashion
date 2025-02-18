import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Dashboard() {
  return (
    <div className='w-full mx-auto'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Dashboard