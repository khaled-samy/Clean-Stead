import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import logo from '../../assets/logo.png'

export default function Navbar (): JSX.Element {
  const [nav, setNav] = useState<boolean>(false)

  const handleNav = (): void => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center text-xl h-24 max-w-[1240px] mx-auto px-4">
      {/* Mobile Menu */}
      <div className="m-10 text-2xl block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <div className={`fixed right-0 top-0 w-[40%] h-full border-l border-l-gray-900 bg-[#00ADEE] text-white font-bold ease-in-out duration-500 ${nav ? '' : 'right-[-100%]'}`}>
        <div className="my-10 mr-16 text-2xl" onClick={handleNav}>
          <AiOutlineClose />
        </div>
        <ul className="px-4">
          <NavItem to="/">الرئيسية</NavItem>
          <NavItem to="/services">الخدمات</NavItem>
          <NavItem to="/about">من نحن</NavItem>
          <NavItem to="/contact">اتصل بنا</NavItem>
        </ul>
      </div>

      {/* Desktop Menu */}
      <Link to={'/'}>
        <div className="md:flex font-bold hidden">
          <img src={logo} alt="logo" />
          <p>
            كلين <span className="text-blue-400">ستيد</span>
          </p>
        </div>
      </Link>

      <ul className="flex gap-8 hidden md:flex">
        <NavItem to="/">الرئيسية</NavItem>
        <NavItem to="/services">الخدمات</NavItem>
        <NavItem to="/about">من نحن</NavItem>
        <NavItem to="/contact">اتصل بنا</NavItem>
      </ul>

      <div>
        <button className="border border-solid border-3 rounded-full bg-[#00ADEE] text-white hover:border-[#00ADEE] font-bold hover:text-[#00ADEE] hover:bg-white py-2.5 px-6">
          احجز الآن
        </button>
      </div>
    </div>
  )
}

// Component for Individual Navigation Item

interface NavItemProps {
  to: string
  children: React.ReactNode
}

function NavItem ({ to, children }: NavItemProps): JSX.Element {
  return (
    <Link to={to}>
      <li className="p-4 md:border-none border-b border-gray-600 hover:text-blue-600">{children}</li>
    </Link>
  )
}
