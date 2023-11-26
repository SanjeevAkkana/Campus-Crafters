import React from 'react'
import { AuthorsInHome, BlogsInHome, HomeTopComponent, MainLayout, PaidServices, ServicesInHome, ServicesSection, Topics, TopicsInHome } from '../Components';

const Home = () => {
  return (
    <MainLayout>
        <HomeTopComponent />
        <ServicesInHome />
        {/* <PaidServices /> */}
        <TopicsInHome />
        <BlogsInHome />
        <AuthorsInHome />
        {/* <ServicesSection /> */}
    </MainLayout>
  )
}

export default Home