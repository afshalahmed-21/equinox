import React from 'react'
import HomeMainSection from '../Components/HomePageLayout/HomeMainSection'
import '../Components/HomePageLayout/HomePageCss.css'
import HomeSection02 from '../Components/HomePageLayout/HomeSection02'
import HomeSection03 from '../Components/HomePageLayout/HomeSection03'
import HomeSection04 from '../Components/HomePageLayout/HomeSection04'
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