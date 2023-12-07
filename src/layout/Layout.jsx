import React from 'react'
import Header from '../container/Header/Header'
import Footer from '../container/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
