import React from 'react'
import mask from '../../assets/Mask.png'

export default function ImageSection (): JSX.Element {
  return (
    <div className='w-full md:w-[50%]'>
      <img className='h-auto md:h-full w-full' src={mask} alt='welcome-img' />
    </div>
  )
}
