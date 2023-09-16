import React from "react"
import { Link } from 'react-router-dom'
import { ImageSection } from '../components'
import groub from '../assets/Group.png'

export default function About (): JSX.Element {
  return (
    <div className='max-w-[1240px] mx-auto px-4 mb-12 flex flex-col md:flex-row'>

    {/* About Information Section */}
    <div className='md:w-[50%] m-12'>
      <div className='flex flex-col md:flex-row items-center mb-12'>
        <h1 className='font-bold text-5xl pl-2'>من نحن</h1>
        <img className='mt-4' src={groub} alt="groub" />
      </div>
      <p className='max-w-md text-xl text-[#7D7E82]'>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص.
      </p>
      <Link to="/contact">
        <button className='mt-8 p-4 px-6 border border-solid border-3 rounded-full border-[#00ADEE] text-xl font-bold text-[#00ADEE] hover:bg-[#00ADEE] hover:text-white hover:border-white'>تواصل معنا</button>
      </Link>
    </div>

    {/* Image Section */}
    <ImageSection />
  </div>
  )
}
