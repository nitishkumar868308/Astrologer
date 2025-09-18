import React from 'react'
import HomePage from './components/Home/HomePage'
import AboutPage from './about/page'
import TarotSection from './components/Home/TarotSection'

const page = () => {
  return (
    <>
      <HomePage />
      <AboutPage />
      <TarotSection />
    </>
  )
}

export default page