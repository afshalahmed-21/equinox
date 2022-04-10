import React from 'react'
import HomeMainSection from '../Componentes/HomePageLayout/HomeMainSection'
import '../Componentes/HomePageLayout/HomePageCss.css'
import HomeSection02 from '../Componentes/HomePageLayout/HomeSection02'
import HomeSection03 from '../Componentes/HomePageLayout/HomeSection03'
import HomeSection04 from '../Componentes/HomePageLayout/HomeSection04'
import Layout from '../Layout/Layout'
import '../Responsive.css'

const Home = () => {
  return (
    <Layout>
      <HomeMainSection />
      <HomeSection02 />
      <HomeSection03 />
      <HomeSection04 />
    </Layout>
  )
}

export default Home