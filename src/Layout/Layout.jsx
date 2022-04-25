import React from 'react'
import Footer from '../Components/CommonComponents/Footer/Footer'
import Header from '../Components/CommonComponents/Header/Header'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout