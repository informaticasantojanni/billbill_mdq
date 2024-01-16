import React from 'react'
import "./homeView.css"

import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import HomeRooms from '../components/HomeRooms'
import HomeTestimonials from '../components/HomeTestimonials'
import HomeServices from '../components/services/HomeServices'
import HomeGalleryMDQ from '../components/galleryMDQ/HomeGalleryMDQ'
import HomeGalleryST from '../components/galleryST/HomeGalleryST'
import HomeContact from '../components/contact/HomeContact'




const HomeView = () => {
  return (
    <div>
      <HomeHero mb="mb-10" />
      <HomeAbout mb="mb-10" />
      <HomeGalleryMDQ  mb="mb-10"/>
      <HomeRooms mb="mb-10" />
      <HomeServices mb="mb-10" />
      <HomeTestimonials mb="mb-10" />
      <HomeContact mb="mb-10"/>
      <HomeGalleryST />

    </div>
  )
}

export default HomeView