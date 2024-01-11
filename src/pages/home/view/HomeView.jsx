import React from 'react'
import "./homeView.css"
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import HomeContact from '../components/HomeContact'
import HomeHero from '../components/HomeHero'
import HomeRooms from '../components/HomeRooms'
import HomeTestimonials from '../components/HomeTestimonials'

const HomeView = () => {
  return (
    <div>
      <HomeHero mb="mb-10"/>
      <HomeAbout mb="mb-10"/>
      <HomeRooms mb="mb-10"/>
      <HomeTestimonials mb="mb-10"/>
      {/* <HomeServices/>
      <HomeContact/> */}
    </div>
  )
}

export default HomeView