import React from 'react'
import NavItem from './NavItem'

export default function NavDesktop (): JSX.Element {
  return (
      <>
      <ul className="flex gap-8 hidden md:flex text-xl">
        <NavItem to="/">الرئيسية</NavItem>
        <NavItem to="/services">الخدمات</NavItem>
        <NavItem to="/about">من نحن</NavItem>
        <NavItem to="/contact">اتصل بنا</NavItem>
      </ul>
      </>
  )
}
