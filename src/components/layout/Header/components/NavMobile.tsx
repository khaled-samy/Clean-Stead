import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import NavItem from './NavItem'

interface INavMobile {
  nav: boolean
  handleNav: () => void
}

export default function NavMobile ({ nav, handleNav }: INavMobile): JSX.Element {
  return (
      <>
      <div className="m-10 text-2xl block md:hidden" onClick={handleNav}>
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>

      <div className={`fixed right-0 top-0 w-[40%] h-full border-l border-l-gray-900 bg-primary text-white font-bold ease-in-out duration-500 z-[2] ${nav ? '' : 'right-[-100%]'}`}>
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
      </>
  )
}
