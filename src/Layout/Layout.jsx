import React from 'react'
import Footer from '../Componentes/CommonComponents/Footer/Footer'
import Header from '../Componentes/CommonComponents/Header/Header'

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