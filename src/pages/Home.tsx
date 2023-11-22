import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import PopularDestinations from '../components/PopularDestinations'
import BestTrips from '../components/BestTrips'
import Service from '../components/Service'
import ArticlesTips from '../components/ArticlesTips'
import Footer from '../components/Footer'

const Home:React.FC = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <PopularDestinations/>
    <BestTrips/>
    <Service/>
    <ArticlesTips/>
    <Footer/>
    </>
    
  )
}

export default Home