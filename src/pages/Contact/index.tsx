import React from 'react'
import Container from '../../components/layout/Container'
import { ContactForm } from './components'
import { ImageSection } from '../../components'
import groub from '../../assets/Group.png'

export default function Contact (): any {
  return (
    <Container>
    <div className='max-w-[1240px] mx-auto px-4 mb-12 md:flex md:items-center'>

      {/* Contact Information Section */}
      <div className='w-full md:w-[50%] md:ml-6'>
        <div className='flex mb-6'>
          <h1 className='font-bold text-[40px] pl-2'>تواصل معنا </h1>
          <img className='mt-4' src={groub} alt="groub" />
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Image Section */}
      <ImageSection />
    </div>
    </Container>
  )
}
