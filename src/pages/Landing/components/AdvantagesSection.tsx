import React from 'react'
import TitleSection from './sharedComponet/TitleSection'
import advantagesSectionItems from '../data/advantagesSectionData'
import AdvangesImage from '../../../assets/AdvangesImage.png'

export default function AdvantagesSection (): JSX.Element {
  return (
    <div>
        {/* Title Section */}
        <TitleSection title='لماذا تختارنا'/>

        {/* Advanges */}
        <div className='md:flex'>
        <img src={AdvangesImage} alt="Advanges Image" />
        <div className='mr-[30px]'>
            {advantagesSectionItems.map((advange, index) => (
            <div key={index} className='flex items-center gap-[25px] mt-[40px] mb-[30px]'>
            <div className='w-[100px] h-[100px] rounded-xl bg-[#E5F7FD] flex items-center justify-center'>
            <img src={advange.img} alt={advange.title} />
            </div>
            <div className='text-xl'>
                <h3 className='font-bold'>{advange.title}</h3>
                <p>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</p>
            </div>
        </div>
            ))}
        </div>
        </div>
  </div>
  )
}
