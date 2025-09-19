import React from 'react'
import HomePage from './components/Home/HomePage'
import AboutPage from './about/page'
import TarotSection from './components/Home/TarotSection'
import FeaturesPage from './features/page'

const page = () => {
  return (
    <>
      <HomePage />
      <FeaturesPage />
      <AboutPage />
      <TarotSection />
    </>
  )
}

export default page