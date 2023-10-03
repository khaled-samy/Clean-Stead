import React from 'react'
import { Group } from 'assets'

export default function TitleSection ({ title }: { title: string }): JSX.Element {
  return (
    <div className='flex justify-center items-center pb-[60px] gap-[10px] mt-[80px]'>
      <img src={Group} alt="groub" className='h-[34px] w-[20px] rotate-180' />
      <h1 className='text-[40px] font-bold'>{title}</h1>
      <img src={Group} alt="groub" className='h-[34px] w-[20px]' />
    </div>
  )
}
