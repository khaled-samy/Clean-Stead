import React from 'react'
import { Link } from 'react-router-dom'
import ServicesSectionItems from '../data/servicesSectionData'
import TitleSection from './sharedComponet/TitleSection'

export default function ServicesSection (): JSX.Element {
  return (
<div>
      {/* Title Section */}
      <TitleSection title='الخدمات التي نقدمها'/>

      {/* Services */}
      <div className='flex flex-wrap gap-[30px] -mb-[50px]'>
        {ServicesSectionItems.map((service, index) => (
          <div key={index} className='rounded-3xl mx-h-[288px] w-full md:w-[31.6%] my-[50px] p-[25px] custom-shadow'>
            <div className='flex items-center mb-[20px]'>
              <img src={service.img} className='object-cover -mt-20 ml-[29px]' alt={service.title} />
              <h3 className='text-xl'>{service.title}</h3>
            </div>
            <div className='flex w-[320px] mb-6'>
              <div className='border-[1px] border-solid border-[#8FC930] ml-[10px]'></div>
              <p className='text-xl text-[#6D6E71]'>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء في البيوت لأنها تحتاج..</p>
            </div>
            <div className='text-[#00ADEE] text-lg'>
              <Link to="/services">رؤية المزيد &#9204;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
