import React from 'react'
import { GreetSectionImg } from 'assets'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

export default function GreetSection (): JSX.Element {
  const isLaptop = useMediaQuery({ minWidth: 850 })

  const backgroundStyle = isLaptop
    ? {
        backgroundImage: `url(${GreetSectionImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    : {}

  return (
    <div className='relative flex rounded-xl h-[550px] bg-[#E5F7FD]' style={backgroundStyle}>
    <div className='flex flex-col justify-center md:items-start pr-[50px]'>
      <h1 className='max-w-[330px] text-[50px] font-bold mb-4 '>
        اختار يلي <span className='text-[#8FC930]'>بخلصك</span> من مره وحده!
      </h1>
      <p className='text-[30px] max-w-[383px] text-[#7D7E82] mb-8 '>
        ما تشيل هم كلمنا بنساعدك احجز خدمة مضمونة بكبسة زر
      </p>
      <Link to='/contact'>
        <button className='w-[150px] h-[50px] bg-white rounded-full hover:bg-[#00ADEE] hover:text-white'>
          تواصل معنا
        </button>
      </Link>
    </div>
    <div className='hidden md:block md:w-[50%]'></div>
  </div>
  )
}
