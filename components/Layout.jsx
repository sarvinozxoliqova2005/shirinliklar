import React from 'react'
import { Outlet } from 'react-router-dom' // Mana shu qatorni qo'shish kerak!
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet/>
        </main>
        <Footer />
    </div>
  )
}

export default Layout