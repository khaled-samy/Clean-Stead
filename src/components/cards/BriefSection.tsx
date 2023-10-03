import React from 'react'
import { Link } from 'react-router-dom'
import ImageSection from './ImageSection'
import { Group } from 'assets'

interface BriefSectionProps {
  title: string
  content: JSX.Element
  buttonText: string
  linkTo: string
}

export default function BriefSection ({ title, content, buttonText, linkTo }: BriefSectionProps): JSX.Element {
  return (
<div className='mb-12 flex flex-col md:flex-row md:justify-between'>

  
      {/* Image Section */}
      <ImageSection />
      <div className='md:w-[50%] md:mt-10'>
        <div className='flex mb-6'>
          <h1 className='font-bold text-[40px] pl-2'>{title}</h1>
          <img className='mt-6 w-[20px] h-[34px]' src={Group} alt="groub" />
        </div>
        <p className='max-w-lg text-[25px] text-secondary'>
          {content}
        </p>
        <Link to={linkTo}>
          <button className='mt-[50px] w-[150px] h-[50px] border border-solid border-3 rounded-full border-primary text-xl font-bold text-primary hover:bg-primary hover:text-white hover:border-white'>
            {buttonText}
          </button>
        </Link>
      </div>

      </div>
  )
}
