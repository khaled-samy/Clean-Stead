import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavMobile, NavDesktop } from './components'
import logo from '../../../assets/logo.png'

export default function Header (): JSX.Element {
  const [nav, setNav] = useState<boolean>(false)

  const handleNav = (): void => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-[50px] mt-[30px] mb-[40px]">

      {/* Mobile Menu */}
      <NavMobile nav={nav} handleNav={handleNav}/>

      {/* Logo Section */}
      <Link to={'/'}>
        <div className="md:flex gap-2 font-bold hidden">
          <img src={logo} alt="logo" className='w-[30.5px] h-[31px] mt-2'/>
          <p className='text-[25px]'>
            كلين <span className="text-blue-400">ستيد</span>
          </p>
        </div>
      </Link>

      {/* Desktop Menu */}
      <NavDesktop />

      <div>
        <button className="w-[120px] h-[50px] border border-solid border-3 rounded-full bg-[#00ADEE] text-white hover:border-[#00ADEE] font-bold hover:text-[#00ADEE] hover:bg-white py-2.5 px-6">
          احجز الآن
        </button>
      </div>
    </div>
  )
}
