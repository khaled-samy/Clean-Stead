import React from 'react';
import mask from '../../assets/Mask.png'

export default function ImageSection (): JSX.Element {
  return (
    <div className='w-full md:w-[50%] mt-6 md:mt-0'>
      <img className='h-[550px] w-full' src={mask} alt='welcome-img' />
    </div>
  )
}
