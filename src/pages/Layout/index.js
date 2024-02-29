import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/index'
// import Navbar2 from '../components/Navbar2'
// import './Layout.css'

function Layout() {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='section-layout'>
            {/* <Navbar2/> */}
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout
