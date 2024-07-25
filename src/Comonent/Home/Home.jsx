import React from 'react'
import { Hero } from './Header/Hero'
import ProjectsContent from './ProjectsContent'
import { ContactMe } from './ContactMe'

export const Home = () => {
  return (
    <>
      <div className='home'>
        <Hero />
        <div className='divider' />
      </div>
      <ProjectsContent />
      <ContactMe/>
      <div className='divider' />

    </>
  )
}
