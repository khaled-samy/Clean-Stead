import React from 'react'
import { ImageSection, ContactForm } from '../components'
import groub from '../assets/Group.png'

export default function Contact (): any {
  return (
    <div className='max-w-[1240px] mx-auto px-4 mb-12 md:flex md:items-center'>

      {/* Contact Information Section */}
      <div className='w-full md:w-[50%] m-12 md:ml-6'>
        <div className='flex mb-12'>
          <h1 className='font-bold text-5xl pl-2'>تواصل معنا </h1>
          <img className='mt-4' src={groub} alt="groub" />
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>

      {/* Image Section */}
      <ImageSection />
    </div>
  )
}
