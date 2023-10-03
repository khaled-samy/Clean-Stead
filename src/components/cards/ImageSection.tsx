import React from 'react'
import { Mask } from 'assets'

export default function ImageSection (): JSX.Element {
  return (
    <div className='w-full md:w-[50%] md:order-1 mb-12 md:mb-0'>
      <img className='h-[550px] w-full object-cover rounded-3xl md:object-none' src={Mask} alt='welcome-img' />
    </div>
  )
}
