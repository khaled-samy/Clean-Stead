import React from 'react'
import TitleSection from './sharedComponet/TitleSection'
import Colums from '../../../assets/Colums.png'
import OpinionSectionItems from '../data/opinionSectionData'

export default function OpinionSection (): JSX.Element {
  return (
<div>
      {/* Title Section */}
      <TitleSection title='ماذا يقولون عملائنا'/>

      {/* Opinions */}
      <div className='md:flex gap-11 mt-[60px]'>
        {OpinionSectionItems.map((opinion, index) => (
        <div key={index} className='relative text-center rounded-3xl md:h-[250px] p-[38px] md:w-[31.1%] md:mb-0 mb-[100px] custom-shadow'>
        <img src={Colums} className='absolute top-0 right-0 -my-3' alt="Colums" />
            <div className='flex justify-center items-center'>
              <img src={opinion.img} className='object-cover -mt-24 ml-[29px]' alt={'test'} />
            </div>
            <div className='ml-[20px]'>
            <h3 className='text-xl mt-[43px] mb-[36px] max-w-[280.09px]'>ندرك صعوبة القيام بتنظيف السجاد من قبل النساء</h3>
            <p>{opinion.name}</p>
            </div>
        <img src={Colums} className='absolute bottom-0- left-0 my-2 rotate-180' alt="Colums" />
        </div>
        ))}
      </div>
    </div>
  )
}
