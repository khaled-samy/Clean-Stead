import React from 'react'
import { Container, ImageSection } from 'components'
import { ContactForm } from './components'
import { Group } from 'assets'

export default function Contact (): any {
  return (
    <Container>
    <div className='md:flex md:items-center justify-between'>
      {/* Image Section */}
      <ImageSection />

      {/* Contact Information Section */}
      <div className='w-full md:w-[48%]'>
        <div className='flex mb-[19px]'>
          <h1 className='font-bold text-[40px] pl-2'>تواصل معنا </h1>
          <img className='mt-4' src={Group} alt="groub" />
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

    </div>
    </Container>
  )
}
